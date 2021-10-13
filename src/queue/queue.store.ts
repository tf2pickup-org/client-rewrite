import type { Queue } from './models/queue';
import { socket } from '../socket';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import type { QueueSlot } from './models/queue-slot';
import { WebsocketEvent } from '../websocket-event';
import type { QueueState } from './models/queue-state';

export const queue = new Observable<Queue>(subscriber => {
  let value: Queue = null;

  const update = (newValue: Queue) => {
    value = newValue;
    subscriber.next(value);
  };

  fetch('http://localhost:3000/queue')
    .then(response => response.json())
    .then(update)
    .catch(error => subscriber.error(error));

  const updateQueueSlots = (slotsToUpdate: QueueSlot[]) => {
    const slots = [...value.slots];
    slotsToUpdate.forEach(updatedSlot => {
      const slot = slots.find(s => s.id === updatedSlot.id);
      Object.assign(slot, updatedSlot);
    });
    update({ ...value, slots });
  };
  socket.on(WebsocketEvent.queueSlotsUpdate, updateQueueSlots);

  const updateQueueState = (state: QueueState) => {
    update({ ...value, state });
  };
  socket.on(WebsocketEvent.queueStateUpdate, updateQueueState);

  return () => {
    socket.off(WebsocketEvent.queueSlotsUpdate, updateQueueSlots);
    socket.off(WebsocketEvent.queueStateUpdate, updateQueueState);
  };
});

export const gameClasses = queue.pipe(
  filter(queue => !!queue),
  map(queue => queue.config.classes.map(cls => cls.name)),
);

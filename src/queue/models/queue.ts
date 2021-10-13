import type { QueueConfig } from './queue-config';
import type { QueueSlot } from './queue-slot';
import type { QueueState } from './queue-state';
import type { MapVoteResult } from './map-vote-result';
import type { SubstituteRequest } from './substitute-request';
import type { Friendship } from './friendship';

export interface Queue {
  config: QueueConfig;
  slots: QueueSlot[];
  state: QueueState | 'loading';
  mapVoteResults: MapVoteResult[];
  substituteRequests?: SubstituteRequest[];
  friendships: Friendship[];
}

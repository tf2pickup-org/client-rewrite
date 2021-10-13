import type { Player } from '../../players/models/player';

export interface QueueSlot {
  id: number;
  gameClass: string;
  ready: boolean;
  playerId?: string;
  player?: Player;
}

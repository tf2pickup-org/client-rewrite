import type { GameClass } from './game-class';

export interface QueueConfig {
  teamCount: number;
  classes: GameClass[];
}

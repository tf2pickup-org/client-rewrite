import type { PlayerRole } from './player-role';
import type { PlayerStats } from './player-stats';
import type { PlayerAvatar } from './player-avatar';
import type { Link } from '../../shared/models/link';

export interface Player {
  id: string;
  name: string;
  joinedAt: Date;
  steamId: string;
  avatar: PlayerAvatar;
  roles: PlayerRole[];
  etf2lProfileId?: number;

  skill?: Record<string, number>;
  stats?: PlayerStats;

  _links: Link[];
}

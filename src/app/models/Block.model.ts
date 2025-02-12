import { GameActor } from './GameActor.model';

export interface Block {
  index: number;
  gameActor?: GameActor | null;
  piece?: string;
  iconUrl: string | null;
}

import { GameActorTypes } from './GameActorTypes.enum';

export type GameTurnAction =
  | { type: 'move'; oldPlace: string; newPlace: string }
  | { type: 'swap'; place1: string; place2: string }
  | { type: 'upgrade'; place1: string; toType: GameActorTypes };

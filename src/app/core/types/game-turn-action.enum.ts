import { GameActorTypes } from './game-actor-types.enum';

export type MoveAction = {
  type: 'move';
  oldPlace: string;
  newPlace: string;
} | null;
export type SwapAction = {
  type: 'swap';
  place1: string;
  place2: string;
} | null;
export type UpgradeAction = {
  type: 'upgrade';
  place: string;
  toType: GameActorTypes;
} | null;

export type GameTurnActions = [MoveAction, SwapAction, UpgradeAction];

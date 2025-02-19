import { GameTurnAction } from '../../types/GameTurnAction.enum';

export interface GameTurn {
  gameSessionId: string;
  playerId: string;
  actions: GameTurnAction[];
}

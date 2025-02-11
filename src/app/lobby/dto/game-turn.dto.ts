import { GameTurnAction } from '../../models/GameTurnAction.enum';

export interface GameTurn {
  gameSessionId: string;
  playerId: string;
  action: GameTurnAction;
}

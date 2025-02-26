import { GameTurnActions } from '../../core/types/GameTurnAction.enum';

export interface GameTurn {
  gameSessionId: string;
  playerId: string;
  actions: GameTurnActions;
}

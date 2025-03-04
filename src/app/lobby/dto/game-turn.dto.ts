import { GameTurnActions } from '../../core/types/game-turn-action.enum';

export interface GameTurn {
  gameSessionId: string;
  playerId: string;
  actions: GameTurnActions;
}

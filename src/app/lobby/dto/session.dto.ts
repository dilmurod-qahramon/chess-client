import { GameFieldState } from '../../models/GameFieldState.model';

export interface GameSession {
  id: string;
  leftPlayerId: string;
  rightPlayerId: string;
  nextTurnForPlayer: 'left' | 'right';
  fieldState: GameFieldState;
}

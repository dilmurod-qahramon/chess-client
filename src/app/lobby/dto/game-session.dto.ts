import { GameFieldState } from '../../types/GameFieldState.model';

export interface GameSessionDto {
  id?: string;
  currentTurn: 'left' | 'right';
  fieldState: GameFieldState;
}

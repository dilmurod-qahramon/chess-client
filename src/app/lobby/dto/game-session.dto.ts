import { GameFieldState } from '../../core/types/game-fieldstate.type';

export interface GameSessionDto {
  id?: string;
  currentTurn: 'left' | 'right';
  fieldState: GameFieldState;
}

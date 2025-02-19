import { GameSessionDto } from '../lobby/dto/game-session.dto';
import { GameFieldState } from './GameFieldState.model';

export interface ChessBoardContext {
  sessionInfo: GameSessionDto;
  submitAction: (event: { from: string; to: string }) => void;
}

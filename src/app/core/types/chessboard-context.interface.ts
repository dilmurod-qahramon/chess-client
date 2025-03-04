import { GameSessionDto } from '../../lobby/dto/game-session.dto';

export interface ChessBoardContext {
  sessionInfo: GameSessionDto;
  submitAction: (event: { from: string; to: string }) => void;
}

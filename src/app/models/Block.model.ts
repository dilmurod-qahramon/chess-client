import { Piece } from './Piece.model';

export interface Block {
  piece: Piece | null;
  position: string; // e.g. 'a1', 'h8'
  index: number;
}

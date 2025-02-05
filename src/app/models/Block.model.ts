export interface Block {
  //capital letters for white pieces, lowercase for black pieces
  //'p' | 'n' | 'b' | 'r' | 'q' | 'k' | 'P' | 'N' | 'B' | 'R' | 'Q' | 'K';
  piece?: string;
  position: string; // e.g. 'a1', 'h8'
  index: number;
}

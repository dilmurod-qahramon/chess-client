import { Injectable } from '@angular/core';
import { Block } from '../../models/Block.model';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private blocks: Block[] = [];

  constructor() {
    this.generateBoard();
  }

  getBlocks(): Block[] {
    return [...this.blocks];
  }

  generateBoard() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        let block: Block = {
          position: String.fromCharCode(97 + j) + (8 - i),
          index: i * 8 + j,
        };
        this.blocks.push(block);
      }
    }
    this.applyDefaultPieces();
  }

  applyDefaultPieces() {
    const pieceSetup: { [key: number]: string } = {
      0: 'r',
      1: 'n',
      2: 'b',
      3: 'q',
      4: 'k',
      5: 'b',
      6: 'n',
      7: 'r',
      8: 'p',
      9: 'p',
      10: 'p',
      11: 'p',
      12: 'p',
      13: 'p',
      14: 'p',
      15: 'p',
      56: 'R',
      57: 'N',
      58: 'B',
      59: 'Q',
      60: 'K',
      61: 'B',
      62: 'N',
      63: 'R',
      48: 'P',
      49: 'P',
      50: 'P',
      51: 'P',
      52: 'P',
      53: 'P',
      54: 'P',
      55: 'P',
    };

    this.blocks.forEach((block) => {
      if (pieceSetup[block.index] !== undefined) {
        block.piece = pieceSetup[block.index];
      }
    });
  }
}

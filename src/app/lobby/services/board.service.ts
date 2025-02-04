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

  generateBoard() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        let block: Block = {
          piece: null,
          position: String.fromCharCode(97 + j) + (8 - i),
          index: i * 8 + j,
        };
        this.blocks.push(block);
      }
    }
  }

  getBlocks(): Block[] {
    return [...this.blocks];
  }
}

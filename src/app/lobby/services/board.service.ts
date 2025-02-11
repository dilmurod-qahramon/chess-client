import { Injectable } from '@angular/core';
import { Block } from '../../models/Block.model';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  updatePiecePlacement(blocks: Block[], piece_placement: string) {
    let index = 0;
    for (let block of blocks) {
      block.piece = piece_placement[index];
      index++;
    }

    return blocks;
  }
}

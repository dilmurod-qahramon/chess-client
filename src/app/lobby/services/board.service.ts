import { Injectable } from '@angular/core';
import { GameFieldState } from '../../models/GameFieldState.model';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  updatePiecePlacement(fieldState: GameFieldState) {
    fieldState.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        console.log(`Row ${rowIndex}, Col ${colIndex}:`, cell);
      });
    });
  }
  // updatePiecePlacement(blocks: Block[], piece_placement: string) {
  //   let index = 0;
  //   for (let block of blocks) {
  //     block.piece = piece_placement[index];
  //     index++;
  //   }
  //   return blocks;
  // }
}

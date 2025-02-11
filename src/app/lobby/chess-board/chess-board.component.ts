import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Block } from '../../models/Block.model';
import { BoardService } from '../services/board.service';
import { default_piece_placement } from '../../constants';

@Component({
  selector: 'app-chess-board',
  standalone: false,
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.scss',
})
export class ChessBoardComponent implements OnInit {
  sessionId?: string;
  blocks: Block[] = [];
  private piece_placement: string = default_piece_placement;

  constructor(
    private activatedRoute: ActivatedRoute,
    private boardService: BoardService
  ) {
    this.generateBoard();
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.sessionId = params['id'];
    });

    this.blocks = this.boardService.updatePiecePlacement(
      this.blocks,
      this.piece_placement
    );
  }

  isDark(index: number): boolean {
    const row = Math.floor(index / 8);
    const col = index % 8;
    return (row + col) % 2 !== 0;
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
  }

  pieceIconMap: Record<string, string> = {
    P: 'wp.svg',
    p: 'p.svg',
    R: 'wr.svg',
    r: 'r.svg',
    N: 'wn.svg',
    n: 'n.svg',
    B: 'wb.svg',
    b: 'b.svg',
    Q: 'wq.svg',
    q: 'q.svg',
    K: 'wk.svg',
    k: 'k.svg',
  };

  getPieceIcon(piece: string): string | undefined {
    if (piece !== 'e') {
      return 'chess-icons/' + this.pieceIconMap[piece];
    }
    return undefined;
  }
}

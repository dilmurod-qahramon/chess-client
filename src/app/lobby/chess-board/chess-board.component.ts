import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../services/board.service';
import { Block } from '../../models/Block.model';

@Component({
  selector: 'app-chess-board',
  standalone: false,
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.scss',
})
export class ChessBoardComponent implements OnInit {
  id?: string;
  blocks: Block[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private boardService: BoardService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.id = params['id'];
    });

    this.blocks = this.boardService.getBlocks;
  }

  movePiece(block: Block) {
    console.log(block);
  }

  isDark(index: number): boolean {
    const row = Math.floor(index / 8);
    const col = index % 8;
    return (row + col) % 2 !== 0;
  }
}

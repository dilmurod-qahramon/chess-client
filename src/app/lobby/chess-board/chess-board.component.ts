import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardService } from '../services/board.service';
import { SessionService } from '../services/session.service';
import { GameFieldState } from '../../models/GameFieldState.model';
import { Block } from '../../models/Block.model';
import { GameActorTypes } from '../../models/GameActorTypes.enum';
import { GameActor } from '../../models/GameActor.model';
import { catchError, EMPTY, throwError } from 'rxjs';

@Component({
  selector: 'app-chess-board',
  standalone: false,
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.scss',
})
export class ChessBoardComponent implements OnInit {
  fieldState?: GameFieldState;
  blocks: Block[] = [];
  sessionId?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sessionService: SessionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.sessionId = params['id'];
    });

    if (this.sessionId) {
      this.sessionService
        .getSession(this.sessionId!)
        .pipe(
          catchError((err) => {
            alert(err);
            this.router.navigate(['chess/lobby']);
            return EMPTY;
          })
        )
        .subscribe((session) => {
          this.fieldState = session.fieldState;
          this.generateBoard();
        });
    }
  }

  generateBoard() {
    this.blocks = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const gameActor = this.fieldState![i][j] ?? null;
        let block: Block = {
          index: i * 8 + j,
          gameActor: gameActor,
          iconUrl: gameActor
            ? `chess-icons/${gameActor.team === 'black' ? 'black-' : ''}${
                gameActor.type
              }.svg`
            : null,
        };
        this.blocks.push(block);
      }
    }
  }

  isDark(index: number): boolean {
    const row = Math.floor(index / 8);
    const col = index % 8;
    return (row + col) % 2 !== 0;
  }
}

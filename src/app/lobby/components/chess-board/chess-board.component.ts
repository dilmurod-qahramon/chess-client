import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { catchError, EMPTY, map, Observable, of, switchMap } from 'rxjs';
import { GameSessionDto } from '../../dto/game-session.dto';
import { ChessBoardContext } from '../../../core/types/chessboard-context.interface';
import { GameTurnActions } from '../../../core/types/game-turn-action.enum';
import { GameFieldState } from '../../../core/types/game-fieldstate.type';

@Component({
  selector: 'app-chess-board',
  standalone: false,
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.scss',
})
export class ChessBoardComponent implements OnInit {
  data$?: Observable<ChessBoardContext>;
  sessionId?: string;
  errorMessage?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.data$ = this.activatedRoute.queryParams.pipe(
      map((params) => params['id']),
      switchMap((sessionId) => {
        this.sessionId = sessionId;
        return this.sessionService.getSession(sessionId);
      }),
      map((sessionDto) => {
        return this.buildChessBoardContext(sessionDto);
      })
    );
  }

  private buildChessBoardContext(sessionDto: GameSessionDto) {
    const pageContext: ChessBoardContext = {
      sessionInfo: this.getChessBoardGameState(sessionDto),
      submitAction: (event: { from: string; to: string }) => {
        const gameTurnActions: GameTurnActions = [
          {
            type: 'move',
            oldPlace: event.from,
            newPlace: event.to,
          },
          null,
          null,
        ];

        this.sessionService
          .updateSessionAndCreateActions(this.sessionId!, gameTurnActions)
          .pipe(
            catchError(() => {
              alert('Invalid move, please play rightfully.');
              return EMPTY;
            })
          )
          .subscribe((updatedSession) => {
            this.data$ = of(this.buildChessBoardContext(updatedSession));
          });
      },
    };

    return pageContext;
  }

  private getChessBoardGameState(sessionDto: GameSessionDto): {
    currentTurn: 'left' | 'right';
    fieldState: GameFieldState;
  } {
    return {
      currentTurn: sessionDto.currentTurn,
      fieldState: sessionDto.fieldState,
    };
  }
}

import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../services/player.service';
import { BoardService } from '../services/board.service';
import { SessionService } from '../services/session.service';
import {
  catchError,
  EMPTY,
  forkJoin,
  Subject,
  switchMap,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-main-menu',
  standalone: false,
  templateUrl: './start-menu.component.html',
  styleUrl: './start-menu.component.scss',
})
export class StartMenuComponent implements OnDestroy {
  username: string | undefined;
  opponent_username: string | undefined;
  session_id: string | undefined;
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private playerService: PlayerService,
    private sessionService: SessionService,
    private boardService: BoardService
  ) {}

  startGame() {
    if (!this.username || !this.opponent_username) {
      alert('Please enter both player names.');
      return;
    }

    forkJoin({
      player1: this.playerService.createPlayer(this.username),
      player2: this.playerService.createPlayer(this.opponent_username),
    })
      .pipe(
        switchMap(({ player1, player2 }) => {
          return this.sessionService.initSession(player1.id!, player2.id!);
        }),
        catchError((err) => {
          console.error('Error creating player or initializing session:', err);
          return EMPTY;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((session) => {
        this.session_id = session.id;
        // this.boardService.updatePiecePlacement(session.fieldState);
        this.router.navigate(['chess/board'], {
          queryParams: { id: this.session_id },
        });
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

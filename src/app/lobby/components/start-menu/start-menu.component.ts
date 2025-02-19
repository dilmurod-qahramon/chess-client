import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { catchError, EMPTY, forkJoin, switchMap } from 'rxjs';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-main-menu',
  standalone: false,
  templateUrl: './start-menu.component.html',
  styleUrl: './start-menu.component.scss',
})
export class StartMenuComponent {
  leftPlayer?: string;
  rightPlayer?: string;
  errorMesage?: string;

  constructor(
    private router: Router,
    private playerService: PlayerService,
    private sessionService: SessionService
  ) {}

  startGame() {
    if (!this.leftPlayer || !this.rightPlayer) {
      this.errorMesage = 'Please enter both player names.';
      return;
    }

    forkJoin({
      player1: this.playerService.createPlayer(this.leftPlayer),
      player2: this.playerService.createPlayer(this.rightPlayer),
    })
      .pipe(
        switchMap(({ player1, player2 }) => {
          const players = {
            leftUsername: player1.username,
            rightUsername: player2.username,
          };
          localStorage.setItem('players', JSON.stringify(players));
          return this.sessionService.initSession(player1.id!, player2.id!);
        }),
        catchError((err) => {
          this.rightPlayer = undefined;
          this.leftPlayer = undefined;
          this.errorMesage = 'OOPS, something went wrong, please try again!';
          console.error('Error creating player or initializing session:', err);
          return EMPTY;
        })
      )
      .subscribe((sessionId) => {
        this.router.navigate(['chess/board'], {
          queryParams: { id: sessionId },
        });
      });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-main-menu',
  standalone: false,

  templateUrl: './start-menu.component.html',
  styleUrl: './start-menu.component.scss',
})
export class StartMenuComponent {
  username1: string | undefined;
  username2: string | undefined;

  constructor(private router: Router, private gameService: GameService) {}

  startGame() {
    if (!this.username1 || !this.username2) {
      alert('Please enter both player names.');
      return;
    }

    this.gameService
      .startGame(this.username1, this.username2)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['dashboard/board'], {
          queryParams: { id: response },
        });
      });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-main-menu',
  standalone: false,

  templateUrl: './start-menu.component.html',
  styleUrl: './start-menu.component.scss',
})
export class StartMenuComponent {
  username: string | undefined;
  opponent_username: string | undefined;
  id: string | undefined;

  constructor(private router: Router, private playerService: PlayerService) {}

  startGame() {
    if (!this.username || !this.opponent_username) {
      alert('Please enter both player names.');
      return;
    }

    this.playerService
      .createPlayer(this.username, this.opponent_username)
      .subscribe((response) => {
        this.id = response.id;
        this.router.navigate(['board'], { queryParams: { id: this.id } });
      });
  }
}

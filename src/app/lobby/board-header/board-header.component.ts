import { Component, Input } from '@angular/core';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-board-header',
  standalone: false,
  templateUrl: './board-header.component.html',
  styleUrl: './board-header.component.scss',
})
export class BoardHeaderComponent {
  player1: string | undefined = 'Player 1';
  player2: string | undefined = 'Player 2';
  @Input({ required: true }) id?: string;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    if (this.id) {
      this.playerService.getPlayer(this.id).subscribe((player) => {
        this.player1 = player.username;
        this.player2 = player.opponent_username;
      });
    }
  }
}

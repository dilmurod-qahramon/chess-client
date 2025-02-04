import { Component } from '@angular/core';
import { GameService } from '../services/game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board-header',
  standalone: false,

  templateUrl: './board-header.component.html',
  styleUrl: './board-header.component.scss',
})
export class BoardHeaderComponent {
  player1: string | undefined = 'Player 1';
  player2: string | undefined = 'Player 2';
  id: number | undefined;

  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.id = params['id'];
    });

    if (this.id) {
      this.gameService.getPlayers(this.id).subscribe((response) => {
        this.player1 = response.player1;
        this.player2 = response.player2;
      });
    } else {
      console.error('No game ID found!');
    }
  }
}

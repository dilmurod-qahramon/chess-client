import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chess-board',
  standalone: false,

  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.scss',
})
export class ChessBoardComponent implements OnInit {
  player1: string | undefined;
  player2: string | undefined;
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

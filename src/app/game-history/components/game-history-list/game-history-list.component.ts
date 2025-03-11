import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../lobby/services/session.service';
import { GameHistoryDto } from '../../dto/game-history.dto';

@Component({
  selector: 'app-game-history-list',
  standalone: false,
  templateUrl: './game-history-list.component.html',
  styleUrl: './game-history-list.component.scss',
})
export class GameHistoryListComponent implements OnInit {
  historyOfAllGames: GameHistoryDto[] = [];
  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    this.sessionService.getAllSessions().subscribe((res) => {
      this.historyOfAllGames = res;
    });
  }
}

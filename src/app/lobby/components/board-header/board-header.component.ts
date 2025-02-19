import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { TimeService } from '../../services/time.service';
import { Observable } from 'rxjs';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-board-header',
  standalone: false,
  templateUrl: './board-header.component.html',
  styleUrl: './board-header.component.scss',
})
export class BoardHeaderComponent implements OnInit {
  leftPlayer: string = 'White Player';
  rightPlayer: string = 'Black Player';
  time$?: Observable<number>;
  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    const players = localStorage.getItem('players');
    if (players) {
      const playersObj = JSON.parse(players);
      this.leftPlayer = playersObj.leftUsername;
      this.rightPlayer = playersObj.rightUsername;
    }
    this.time$ = this.timeService.getTimeObservable();
  }
}

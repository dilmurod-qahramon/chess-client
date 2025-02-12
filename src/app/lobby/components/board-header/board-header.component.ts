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

@Component({
  selector: 'app-board-header',
  standalone: false,
  templateUrl: './board-header.component.html',
  styleUrl: './board-header.component.scss',
})
export class BoardHeaderComponent implements OnChanges, OnInit {
  leftPlayer: string | undefined = 'Left Player';
  rightPlayer: string | undefined = 'Right Player';
  time$?: Observable<number>;
  @Input({ required: true }) leftPlayerId?: string;
  @Input({ required: true }) rightPlayerId?: string;

  constructor(
    private playerService: PlayerService,
    private timeService: TimeService
  ) {}

  ngOnInit(): void {
    this.time$ = this.timeService.getTimeObservable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.leftPlayerId && this.rightPlayerId) {
      this.playerService.getPlayer(this.leftPlayerId).subscribe((player) => {
        this.leftPlayer = player.username;
      });

      this.playerService.getPlayer(this.rightPlayerId).subscribe((player) => {
        this.rightPlayer = player.username;
      });
    }
  }
}

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SessionService } from '../services/session.service';
import { GameTurnService } from '../services/game-turn.service';
import { GameTurnAction } from '../../models/GameTurnAction.enum';

@Component({
  selector: 'app-left-panel',
  standalone: false,
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.scss',
})
export class LeftPanelComponent implements OnChanges {
  leftPlayerId?: string;
  rightPlayerId?: string;
  turn: 'left' | 'right' = 'left';
  moveFrom: string = '';
  moveTo: string = '';
  @Input({ required: true }) sessionId?: string;

  constructor(
    private sessionService: SessionService,
    private gameTurnService: GameTurnService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sessionId'] && changes['sessionId'].currentValue) {
      this.sessionService.getSession(this.sessionId!).subscribe((session) => {
        this.leftPlayerId = session.leftPlayerId;
        this.rightPlayerId = session.rightPlayerId;
        this.turn = session.nextTurnForPlayer;
      });
    }
  }

  onSubmit() {
    const gameTurnAction: GameTurnAction = {
      type: 'move',
      oldPlace: this.moveFrom,
      newPlace: this.moveTo,
    };
    this.gameTurnService.createGameTurn(
      this.sessionId!,
      this.leftPlayerId!,
      gameTurnAction
    );
  }
}

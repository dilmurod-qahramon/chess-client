import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { SessionService } from '../../services/session.service';
import { GameTurnService } from '../../services/game-turn.service';
import { GameTurnAction } from '../../../models/GameTurnAction.enum';
import { catchError, EMPTY, Subject, takeUntil } from 'rxjs';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-left-panel',
  standalone: false,
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.scss',
})
export class LeftPanelComponent implements OnChanges, OnDestroy, OnInit {
  leftPlayerId?: string;
  rightPlayerId?: string;
  nextTurn?: 'left' | 'right';
  moveFrom: string = '';
  moveTo: string = '';
  turnDuration?: number;
  private destroy$ = new Subject<void>();
  @Input({ required: true }) sessionId?: string;

  constructor(
    private sessionService: SessionService,
    private gameTurnService: GameTurnService,
    private timeService: TimeService
  ) {}

  ngOnInit(): void {
    this.timeService
      .getTimeObservable()
      .pipe(
        catchError((err) => {
          alert('Error:' + err);
          return EMPTY;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((time) => {
        this.turnDuration = time;
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sessionId'] && changes['sessionId'].currentValue) {
      this.sessionService
        .getSession(this.sessionId!)
        .pipe(
          catchError((err) => {
            alert('Error:' + err);
            return EMPTY;
          }),
          takeUntil(this.destroy$)
        )
        .subscribe((session) => {
          this.leftPlayerId = session.leftPlayerId;
          this.rightPlayerId = session.rightPlayerId;
          this.nextTurn = session.nextTurnForPlayer;
        });
    }
  }

  onSubmit() {
    const moveRegex = /^[a-h][1-8]$/;
    if (!moveRegex.test(this.moveFrom) || !moveRegex.test(this.moveTo)) {
      alert('Please, enter a valid move!!');
      return;
    }

    const gameTurnActions: GameTurnAction[] = [
      {
        type: 'move',
        oldPlace: this.moveFrom,
        newPlace: this.moveTo,
      },
    ];

    if (this.nextTurn === 'left') {
      this.gameTurnService
        .createGameTurn(this.sessionId!, this.leftPlayerId!, gameTurnActions)
        .pipe(
          catchError((err) => {
            alert('Error:' + err);
            return EMPTY;
          }),
          takeUntil(this.destroy$)
        )
        .subscribe((gameTurn) => {
          console.log(gameTurn);
        });
      this.nextTurn = 'right';
    } else {
      this.gameTurnService
        .createGameTurn(this.sessionId!, this.rightPlayerId!, gameTurnActions)
        .pipe(
          catchError((err) => {
            alert('Error:' + err);
            return EMPTY;
          }),
          takeUntil(this.destroy$)
        )
        .subscribe((gameTurn) => {
          console.log(gameTurn);
          // this.nextTurn = gameTurn.
        });
      this.nextTurn = 'left';
    }

    this.sessionService
      .updateSession(
        this.sessionId!,
        this.nextTurn,
        this.moveFrom,
        this.moveTo,
        this.turnDuration!
      )
      .pipe(
        catchError((err) => {
          alert('Error:' + err);
          return EMPTY;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((session) => {
        console.log(session);
      });
    this.moveFrom = '';
    this.moveTo = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameTurn } from '../dto/game-turn.dto';
import { apiUrl } from '../../constants';
import { GameTurnAction } from '../../models/GameTurnAction.enum';

@Injectable({
  providedIn: 'root',
})
export class GameTurnService {
  constructor(private httpClient: HttpClient) {}
  createGameTurn(
    sessionId: string,
    playerId: string,
    actions: GameTurnAction[]
  ) {
    return this.httpClient.post<GameTurn>(`${apiUrl}/game-turn`, {
      gameSessionId: sessionId,
      playerId: playerId,
      actions: actions,
    });
  }
}

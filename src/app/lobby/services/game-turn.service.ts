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
  createGameTurn(sessionId: string, playerId: string, action: GameTurnAction) {
    console.log(action);
    return this.httpClient.post<GameTurn>(`${apiUrl}/gameturns`, {
      sessionId: sessionId,
      playerId: playerId,
      action: action,
    });
  }
}

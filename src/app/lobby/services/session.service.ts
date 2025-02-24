import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../constants';
import { GameSessionDto } from '../dto/game-session.dto';
import { GameTurnActions } from '../../types/GameTurnAction.enum';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private httpClient: HttpClient) {}

  initSession(leftPlayerId: string, rightPlayerId: string) {
    return this.httpClient.post(
      `${API_URL}/sessions`,
      {
        leftPlayerId,
        rightPlayerId,
      },
      { responseType: 'text' }
    );
  }

  getSession(sessionId: string) {
    return this.httpClient.get<GameSessionDto>(
      `${API_URL}/sessions/${sessionId}`
    );
  }

  updateSessionAndCreateActions(sessionId: string, actions: GameTurnActions) {
    return this.httpClient.post<GameSessionDto>(
      `${API_URL}/sessions/${sessionId}/actions`,
      {
        actions: actions,
      }
    );
  }

  finishSession(sessionId: string) {
    return this.httpClient.patch(`${API_URL}/sessions/${sessionId}`, {});
  }
}

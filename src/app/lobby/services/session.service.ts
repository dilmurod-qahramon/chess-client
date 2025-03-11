import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../core/constants';
import { GameSessionDto } from '../dto/game-session.dto';
import { GameTurnActions } from '../../core/types/game-turn-action.enum';
import { GameHistoryDto } from '../../game-history/dto/game-history.dto';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private httpClient: HttpClient) {}

  getAllSessions() {
    return this.httpClient.get<GameHistoryDto[]>(`${API_URL}/sessions`);
  }

  getSession(sessionId: string) {
    return this.httpClient.get<GameSessionDto>(
      `${API_URL}/sessions/${sessionId}`
    );
  }

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

  deleteSession(sessionId: string) {
    return this.httpClient.delete(`${API_URL}/sessions/${sessionId}`);
  }
}

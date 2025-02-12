import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../../constants';
import { GameSession } from '../dto/session.dto';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private httpClient: HttpClient) {}

  initSession(leftPlayerId: string, rightPlayerId: string) {
    return this.httpClient.post<GameSession>(`${apiUrl}/sessions`, {
      leftPlayerId,
      rightPlayerId,
    });
  }

  getSession(id: string) {
    return this.httpClient.get<GameSession>(`${apiUrl}/sessions/${id}`);
  }

  updateSession(
    id: string,
    nextTurnForPlayer: 'left' | 'right',
    moveFrom: string,
    moveTo: string,
    turnDuration: number
  ) {
    return this.httpClient.patch(`${apiUrl}/sessions/${id}`, {
      nextTurnForPlayer,
      moveFrom,
      moveTo,
      turnDuration,
    });
  }
}

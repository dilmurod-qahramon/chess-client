import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Players } from '../dto/Players.dto';
import { apiUrl } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private httpClient: HttpClient) {}

  startGame(player1: string, player2: string) {
    const players: Players = { player1, player2 };
    return this.httpClient.post<Players>(`${apiUrl}/players`, players);
  }

  getPlayers(id: number) {
    return this.httpClient.get<Players>(`${apiUrl}/players/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Players } from '../dto/Players.dto';

@Injectable({
  providedIn: 'root',
})
export class RegisterPlayersService {
  private chessApiUrl = 'http://localhost:3000/api/players';

  constructor(private httpClient: HttpClient) {}

  registerPlayers(players: Players) {
    console.log(players);
    return this.httpClient.post<Players>(this.chessApiUrl, players);
  }
}

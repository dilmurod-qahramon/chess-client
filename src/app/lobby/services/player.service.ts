import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../../constants';
import { PlayerDto } from '../dto/Player.dto';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private httpClient: HttpClient) {}

  createPlayer(username: string, opponent_username: string) {
    return this.httpClient.post<PlayerDto>(`${apiUrl}/player`, {
      username,
      opponent_username,
    });
  }

  getPlayer(id: string) {
    return this.httpClient.get<PlayerDto>(`${apiUrl}/player/${id}`);
  }
}

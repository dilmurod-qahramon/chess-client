import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../constants';
import { PlayerDto } from '../dto/player.dto';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private httpClient: HttpClient) {}

  createPlayer(username: string) {
    return this.httpClient.post<PlayerDto>(
      `${API_URL}/players/${username}`,
      {}
    );
  }

  getPlayer(username: string) {
    return this.httpClient.get<PlayerDto>(`${API_URL}/players/${username}`);
  }
}

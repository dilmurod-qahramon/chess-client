import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../../constants';
import { PlayerDto } from '../dto/player.dto';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private httpClient: HttpClient) {}

  createPlayer(username: string) {
    return this.httpClient.post<PlayerDto>(`${apiUrl}/players`, {
      username,
    });
  }

  getPlayer(id: string) {
    return this.httpClient.get<PlayerDto>(`${apiUrl}/players/${id}`);
  }
}

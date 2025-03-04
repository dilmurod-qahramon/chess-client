import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../core/constants';
import { Register } from '../../core/types/register.interface';
import { LoginResponseDto } from '../dto/login-response.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string) {
    return this.httpClient.post<LoginResponseDto>(`${API_URL}/auth/login`, {
      username,
      password,
    });
  }

  register(register: Register) {
    return this.httpClient.post<string>(`${API_URL}/auth/register`, register);
  }

  getNewAccessToken(token: string) {
    return this.httpClient.post<LoginResponseDto>(
      `${API_URL}/auth/refresh-token`,
      {
        refreshToken: token,
      }
    );
  }
}

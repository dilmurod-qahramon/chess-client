import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../core/constants';
import { Register } from '../../core/types/register.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string) {
    return this.httpClient.post<{ access_token: string }>(
      `${API_URL}/auth/login`,
      {
        username,
        password,
      }
    );
  }

  register(register: Register) {
    console.log(register);
    return this.httpClient.post<string>(`${API_URL}/auth/register`, register);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../../types/register.interface';
import { API_URL } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string) {
    return this.httpClient.post<string>(`${API_URL}/auth/login`, {
      username,
      password,
    });
  }

  register(register: Register) {
    return this.httpClient.post<string>(`${API_URL}/auth/register`, register);
  }
}

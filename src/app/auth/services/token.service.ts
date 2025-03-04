import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private accessToken = 'accessToken';
  private refreshToken = 'refreshToken';
  constructor() {}

  public setAccessToken(token: string): void {
    localStorage.setItem(this.accessToken, token);
  }

  public getAccessToken(): string | null {
    return localStorage.getItem(this.accessToken);
  }

  public setRefreshToken(token: string): void {
    localStorage.setItem(this.refreshToken, token);
  }

  public getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshToken);
  }

  public removeTokens(): void {
    localStorage.removeItem(this.accessToken);
    localStorage.removeItem(this.refreshToken);
  }
}

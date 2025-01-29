import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetServerDataService {
  private chessApiUrl = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) {}
  getData() {
    return this.httpClient.get<string>(this.chessApiUrl, {
      responseType: 'text' as 'json',
    });
  }
}

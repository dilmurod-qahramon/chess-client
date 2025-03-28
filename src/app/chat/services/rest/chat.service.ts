import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from '../../dtos/chat.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = 'https://localhost:7214/api/chats';
  constructor(private httpClient: HttpClient) {}

  fetchListOfChatsByUserId(userId: string) {
    return this.httpClient.get<Chat[]>(`${this.apiUrl}/user/${userId}`);
  }

  fetchChatById(chatId: string) {
    return this.httpClient.get<Chat>(`${this.apiUrl}/${chatId}`);
  }
}

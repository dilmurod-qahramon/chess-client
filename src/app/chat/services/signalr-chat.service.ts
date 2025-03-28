import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../dtos/message.interface';

@Injectable({
  providedIn: 'root',
})
export class SignalRChatService {
  private hubConnection!: signalR.HubConnection;
  private messagesSubject = new BehaviorSubject<Message[]>([]);
  public messages$ = this.messagesSubject.asObservable();

  startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7214/chatHub')
      .withAutomaticReconnect()
      .build();

    this.hubConnection
      .start()
      .catch((err) => console.error('Error starting SignalR connection:', err));

    this.hubConnection.on('ReceiveMessage', (message: Message) => {
      this.messagesSubject.next([...this.messagesSubject.value, message]);
    });
  }

  sendMessage(chatId: string, message: string) {
    if (
      this.hubConnection &&
      this.hubConnection.state === signalR.HubConnectionState.Connected
    ) {
      this.hubConnection
        .invoke('SendMessage', chatId, message)
        .catch((err) => console.error('Error sending message:', err));
    } else {
      console.warn('SignalR not connected.');
    }
  }

  joinChat(chatId: string) {
    if (
      this.hubConnection &&
      this.hubConnection.state === signalR.HubConnectionState.Connected
    ) {
      this.hubConnection
        .invoke('JoinChat', chatId)
        .catch((err) => console.error('Error sending message:', err));
    } else {
      console.warn('SignalR not connected.');
    }
  }

  leaveChat(chatId: string) {
    if (
      this.hubConnection &&
      this.hubConnection.state === signalR.HubConnectionState.Connected
    ) {
      this.hubConnection
        .invoke('LeaveChat', chatId)
        .catch((err) => console.error('Error sending message:', err));
    } else {
      console.warn('SignalR not connected.');
    }
  }
}

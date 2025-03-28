import { Component } from '@angular/core';
import { Chat } from '../../dtos/chat.interface';
import { ChatService } from '../../services/rest/chat.service';

@Component({
  selector: 'app-chat',
  standalone: false,
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  chat: Chat | undefined;
  constructor(private chatService: ChatService) {}

  selectChat(chatId: string) {
    this.chatService.fetchChatById(chatId).subscribe((res) => {
      this.chat = res;
    });
  }
}

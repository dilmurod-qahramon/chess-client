import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatService } from '../../services/rest/chat.service';
import { Chat } from '../../dtos/chat.interface';

@Component({
  selector: 'app-chat-list',
  standalone: false,
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.scss',
})
export class ChatListComponent implements OnInit {
  chats!: Chat[];
  @Output() chatSelected = new EventEmitter<string>();

  constructor(private chatService: ChatService) {}
  ngOnInit(): void {
    this.chatService
      .fetchListOfChatsByUserId('22222222-2222-2222-2222-333333333333')
      .subscribe((res) => {
        this.chats = res;
      });
  }

  selectChat(chatId: string) {
    this.chatSelected.emit(chatId);
  }
}

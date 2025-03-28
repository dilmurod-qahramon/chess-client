import { Component, Input } from '@angular/core';
import { SignalRChatService } from '../../services/signalr-chat.service';
import { Observable } from 'rxjs';
import { Message } from '../../dtos/message.interface';

@Component({
  selector: 'app-chat-window',
  standalone: false,
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.scss',
})
export class ChatWindowComponent {
  messages$!: Observable<Message[]>;
  @Input() chatId!: string;
  @Input() messages: Message[] | undefined = [];
  constructor(private signalRChatService: SignalRChatService) {}

  ngOnInit() {
    this.messages$ = this.signalRChatService.messages$;
  }

  sendMessage(text: string) {
    if (text.trim()) {
      this.signalRChatService.sendMessage(this.chatId, text);
    }
  }
}

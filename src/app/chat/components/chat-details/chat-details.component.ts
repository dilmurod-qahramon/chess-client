import { Component, Input } from '@angular/core';
import { Chat } from '../../dtos/chat.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-details',
  standalone: false,
  templateUrl: './chat-details.component.html',
  styleUrl: './chat-details.component.scss',
})
export class ChatDetailsComponent {
  @Input({ required: true }) chat: Chat | undefined;
}

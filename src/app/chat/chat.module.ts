import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { ChatDetailsComponent } from './components/chat-details/chat-details.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    ChatListComponent,
    ChatWindowComponent,
    ChatDetailsComponent,
    ChatComponent,
  ],
  imports: [CommonModule, ChatRoutingModule],
})
export class ChatModule {}

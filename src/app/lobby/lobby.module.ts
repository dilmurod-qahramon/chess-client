import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { LobbyRoutingModule } from './lobby-routing.module';

@NgModule({
  declarations: [StartMenuComponent, ChessBoardComponent],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    LobbyRoutingModule,
  ],
})
export class LobbyModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ChessBoardComponent } from './components/chess-board/chess-board.component';
import { StartMenuComponent } from './components/start-menu/start-menu.component';
import { LobbyRoutingModule } from './lobby-routing.module';
import { BoardHeaderComponent } from './components/board-header/board-header.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';

@NgModule({
  declarations: [
    StartMenuComponent,
    ChessBoardComponent,
    BoardHeaderComponent,
    LeftPanelComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    LobbyRoutingModule,
  ],
})
export class LobbyModule {}

import { NgModule } from '@angular/core';
import { ChessBoardComponent } from './components/chess-board/chess-board.component';
import { StartMenuComponent } from './components/start-menu/start-menu.component';
import { LobbyRoutingModule } from './lobby-routing.module';
import { BoardHeaderComponent } from './components/board-header/board-header.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { IconPathPipe } from './pipes/icon-path.pipe';
import { SideToColorPipe } from './pipes/side-to-color.pipe';
import { SharedModule } from '../shared/shared.module';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    StartMenuComponent,
    ChessBoardComponent,
    BoardHeaderComponent,
    LeftPanelComponent,
    IconPathPipe,
    SideToColorPipe,
  ],
  imports: [LobbyRoutingModule, SharedModule, DialogModule],
})
export class LobbyModule {}

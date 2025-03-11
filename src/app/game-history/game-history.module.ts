import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameHistoryRoutingModule } from './game-history-routing.module';
import { GameHistoryListComponent } from './components/game-history-list/game-history-list.component';
import { LobbyModule } from '../lobby/lobby.module';
import { ActionsComponent } from './components/actions/actions.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [GameHistoryListComponent, ActionsComponent],
  imports: [CommonModule, GameHistoryRoutingModule, LobbyModule, ButtonModule],
})
export class GameHistoryModule {}

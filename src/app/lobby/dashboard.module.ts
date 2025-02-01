import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<<< HEAD:src/app/lobby/lobby.module.ts
import { DashboardRoutingModule } from './lobby-routing.module';
import { StartMenuComponent } from './start-menu/start-menu.component';
========
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainMenuComponent } from './start-menu/start-menu.component';
>>>>>>>> d7af360fcb1811d5de9f4b2ffdc176364f050f2a:src/app/lobby/dashboard.module.ts
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ChessBoardComponent } from './chess-board/chess-board.component';

@NgModule({
  declarations: [StartMenuComponent, ChessBoardComponent],
  imports: [
    CommonModule,
    ButtonModule,
    DashboardRoutingModule,
    InputTextModule,
    FormsModule,
  ],
})
export class LobbyModule {}

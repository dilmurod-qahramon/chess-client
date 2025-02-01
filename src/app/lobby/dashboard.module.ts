import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainMenuComponent } from './start-menu/start-menu.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ChessBoardComponent } from './chess-board/chess-board.component';

@NgModule({
  declarations: [MainMenuComponent, ChessBoardComponent],
  imports: [
    CommonModule,
    ButtonModule,
    DashboardRoutingModule,
    InputTextModule,
    FormsModule,
  ],
})
export class DashboardModule {}

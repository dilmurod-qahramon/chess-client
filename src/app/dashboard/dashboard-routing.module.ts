import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ChessBoardComponent } from './chess-board/chess-board.component';

const routes: Routes = [
  {
    path: '',
    component: MainMenuComponent,
    title: 'Main Menu',
  },
  {
    path: 'board',
    component: ChessBoardComponent,
    title: 'Chess',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

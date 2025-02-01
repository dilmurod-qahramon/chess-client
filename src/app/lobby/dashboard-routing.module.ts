import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<<< HEAD:src/app/lobby/lobby-routing.module.ts
import { StartMenuComponent } from './start-menu/start-menu.component';
========
import { MainMenuComponent } from './start-menu/start-menu.component';
>>>>>>>> d7af360fcb1811d5de9f4b2ffdc176364f050f2a:src/app/lobby/dashboard-routing.module.ts
import { ChessBoardComponent } from './chess-board/chess-board.component';

const routes: Routes = [
  {
    path: '',
    component: StartMenuComponent,
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { ChessBoardComponent } from './chess-board/chess-board.component';

const routes: Routes = [
  {
    path: '',
    component: StartMenuComponent,
    title: 'Start Menu',
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
export class LobbyRoutingModule {}

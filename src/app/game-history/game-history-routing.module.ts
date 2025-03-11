import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameHistoryListComponent } from './components/game-history-list/game-history-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'games',
    pathMatch: 'full',
  },
  {
    path: 'games',
    component: GameHistoryListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameHistoryRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lobby',
    pathMatch: 'full',
  },
  {
    path: 'lobby',
    loadChildren: () =>
<<<<<<< HEAD
      import('./lobby/lobby.module').then((m) => m.LobbyModule),
=======
      import('./lobby/dashboard.module').then((m) => m.DashboardModule),
>>>>>>> d7af360fcb1811d5de9f4b2ffdc176364f050f2a
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

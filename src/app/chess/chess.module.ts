import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChessRoutingModule } from './chess-routing.module';
import { ServerComponent } from './server/server.component';


@NgModule({
  declarations: [
    ServerComponent
  ],
  imports: [
    CommonModule,
    ChessRoutingModule
  ]
})
export class ChessModule { }

import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [],
  imports: [DialogModule, InputTextModule, SharedModule],
})
export class PrimengModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PrimengModule } from './modules/primeng/primeng.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const SHARED_MODULES = [CommonModule, FormsModule, ButtonModule, PrimengModule];

@NgModule({
  declarations: [NotFoundComponent],
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES],
})
export class SharedModule {}

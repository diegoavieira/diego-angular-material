import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DamMainComponent } from './dam-main.component';

@NgModule({
  declarations: [DamMainComponent],
  exports: [DamMainComponent],
  imports: [
    CommonModule
  ]
})
export class DamMainModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaAddAndSellComponent } from './tela-add-and-sell/tela-add-and-sell.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tela',
    component: TelaAddAndSellComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [TelaAddAndSellComponent]
})
export class AddAndSellModule { }

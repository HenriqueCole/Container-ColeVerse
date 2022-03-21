import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaAddAndSellComponent } from './tela-add-and-sell/tela-add-and-sell.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import CheckLogged from '../checkLogged';

const routes: Routes = [
  {
    path: 'telaAddAndSell',
    component: TelaAddAndSellComponent, canActivate: [
      CheckLogged
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [CheckLogged],
  declarations: [TelaAddAndSellComponent]
})
export class AddAndSellModule { }

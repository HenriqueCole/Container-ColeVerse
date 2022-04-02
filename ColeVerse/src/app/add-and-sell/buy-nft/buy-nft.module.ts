import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { FormsModule } from '@angular/forms';
import CheckLogged from 'src/app/checkLogged';

const routes: Routes = [
  {
    path: 'buynft',
    component: BuyComponent, canActivate: [
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
  declarations: [BuyComponent]
})
export class BuyNftModule { }

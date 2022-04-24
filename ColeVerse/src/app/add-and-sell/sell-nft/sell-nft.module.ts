import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VenderNFTComponent } from './vender-nft/vender-nft.component';
import { RemoverNFTdaVendaComponent } from './remover-nftda-venda/remover-nftda-venda.component';
import { FormsModule } from '@angular/forms';
import CheckLogged from 'src/app/checkLogged';

const routes: Routes = [
  {
    path: 'vendernft',
    component: VenderNFTComponent, canActivate: [
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
  declarations: [VenderNFTComponent, RemoverNFTdaVendaComponent]
})
export class SellNFTModule { }
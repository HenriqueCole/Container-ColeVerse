import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VenderNFTComponent } from './vender-nft/vender-nft.component';
import { EditarNFTdaVendaComponent } from './editar-nftda-venda/editar-nftda-venda.component';
import { RemoverNFTdaVendaComponent } from './remover-nftda-venda/remover-nftda-venda.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'vendernft',
    component: VenderNFTComponent
  },
  {
    path: 'editarnft',
    component: EditarNFTdaVendaComponent
  },
  {
    path: 'removernft',
    component: RemoverNFTdaVendaComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  declarations: [VenderNFTComponent, EditarNFTdaVendaComponent, RemoverNFTdaVendaComponent]
})
export class SellNFTModule { }
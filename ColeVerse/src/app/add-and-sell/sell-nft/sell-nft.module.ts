import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VenderNFTComponent } from './vender-nft/vender-nft.component';
import { EditarNFTComponent } from '../listar-nft/editar-nft/editar-nft.component';
import { RemoverNFTComponent } from '../listar-nft/remover-nft/remover-nft.component';

const routes: Routes = [
  {
    path: 'vendernft',
    component: VenderNFTComponent
  },
  {
    path: 'editarnft',
    component: EditarNFTComponent
  }
  {
    path: 'removernft',
    component: RemoverNFTComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [VenderNFTComponent, EditarNFTComponent, RemoverNFTComponent]
})
export class SellNFTModule { }

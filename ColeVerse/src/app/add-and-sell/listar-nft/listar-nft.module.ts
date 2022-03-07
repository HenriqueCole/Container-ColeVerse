import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaSuaNFTComponent } from './lista-sua-nft/lista-sua-nft.component';
import { RemoverNFTComponent } from './remover-nft/remover-nft.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'listarNFT',
    component: ListaSuaNFTComponent
  },
  {
    path: 'removerNftListada',
    component: RemoverNFTComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  declarations: [ListaSuaNFTComponent, RemoverNFTComponent]
})
export class ListarNFTModule { }

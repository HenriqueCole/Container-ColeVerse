import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaSuaNFTComponent } from './lista-sua-nft/lista-sua-nft.component';
import { EditarNFTComponent } from './editar-nft/editar-nft.component';
import { RemoverNFTComponent } from './remover-nft/remover-nft.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'editarNFTListada',
    component: EditarNFTComponent
  },
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
  declarations: [EditarNFTComponent, ListaSuaNFTComponent, RemoverNFTComponent]
})
export class ListarNFTModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaSuaNFTComponent } from './lista-sua-nft/lista-sua-nft.component';
import { EditarNFTComponent } from './editar-nft/editar-nft.component';
import { RemoverNFTComponent } from './remover-nft/remover-nft.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListaSuaNFTComponent, EditarNFTComponent, RemoverNFTComponent]
})
export class ListarNFTModule { }

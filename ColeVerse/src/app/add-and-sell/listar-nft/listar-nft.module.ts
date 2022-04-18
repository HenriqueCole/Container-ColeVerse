import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaSuaNFTComponent } from './lista-sua-nft/lista-sua-nft.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import CheckLogged from 'src/app/checkLogged';

const routes: Routes = [
  {
    path: 'listarNFT',
    component: ListaSuaNFTComponent, canActivate: [
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
  declarations: [ListaSuaNFTComponent]
})
export class ListarNFTModule { }

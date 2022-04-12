import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { UsuarioService } from 'src/app/services/usuario.service';
import { d } from '@angular/core/src/render3';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  idPessoa = localStorage.getItem('IDUSER');

  imageURL
  teste = 0;
  openModal;
  listaNFT = []

  
  images = [

  ]

  ngOnInit() {
    this.usuarioService.buscarNFTBUY().then((resultado: any) =>{
      if (resultado.length != 0){
        resultado.forEach(element => {
          this.listaNFT.push(element);
        });
      }
    })
  }

  

  preco: String = "";
  nome: String = "";
  saidaDosInputs = 0;

  mudanca(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.img64 = reader.result;    
    };
  }
  img64 = undefined;

  voltar(){
    this.router.navigate(['/telaAddAndSell'])
  }


  comprarNFT(){
      swal("Success!", "You bought this NFT!", "success");

  }

}

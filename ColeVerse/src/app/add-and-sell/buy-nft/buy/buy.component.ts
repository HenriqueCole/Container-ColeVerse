import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { UsuarioService } from 'src/app/services/usuario.service';

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
    console.log(this.idPessoa);
    fetch('/api/buscar_nft',
    {
      method: 'POST', headers: { 'Content-Type': 'application/json' }
    }).then(function (result) {
      return result.json();
    }).then((dados) => {
      console.log(dados)
      this.listaNFT = dados.list;
      console.log("essa é a lista nft --> " , this.listaNFT)
    }
    ).catch(function (erro) { console.log(erro); })
    
    fetch('/api/inserir_nft',
      {
        method: 'POST',
        body: JSON.stringify({
          nome: this.name,
          image: this.imageURL,
          price: this.price
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(function (result) {
      return result.json();
    }).then(function (dados) {
      console.log(dados);
    }).catch(function (erro) {
      console.log(erro);
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
  

  voltar(){
    this.router.navigate(['/telaAddAndSell'])
  }

}

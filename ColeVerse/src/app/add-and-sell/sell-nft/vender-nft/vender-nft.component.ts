import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert';

@Component({
  selector: 'app-vender-nft',
  templateUrl: './vender-nft.component.html',
  styleUrls: ['./vender-nft.component.css']
})
export class VenderNFTComponent implements OnInit {

  constructor(
    private router: Router

  ) { }

  

  ngOnInit() {
    
  }
  

  imageURL
  teste = 0;
  openModal

  images = [

  ]

  mostrarImagem(event) {
    const file = new FileReader
    file.onload = (e) => {
      this.imageURL = e.target.result;
    }
    this.teste = 1
    file.readAsDataURL(event.target.files[0])
  }


  abrirModal() {
    this.openModal = 1
    this.teste = 0;
    this.name = ""
    this.price = ""
  }

  preco: String = "";
  nome: String = "";
  saidaDosInputs = 0;

  valorBalanca
  salvaInt




  clickBotao() {
   
    console.log("Salva int: ", this.salvaInt)
    console.log("Valor: ", this.valorBalanca);
    fetch('/api/NFT',
      {
        method: 'POST',
        body: JSON.stringify({
          img: this.img64
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

    this.images.push(this.imageURL);
    this.cont++;
    this.contArr.push(this.cont);
    console.log(this.contArr[this.cont - 1]);
    console.log(this.contArr[this.cont - 2]);
    this.teste == 0;
    var item = document.createElement('li');
    var image = document.createElement('img');
    image.src = this.images[this.cont];
    image.id = 'imagemSalva'
    this.openModal = 2;


    image.style.height = '350px';
    image.style.width = '350px';
    image.style.margin = '-137px 0px 0px 0px';

    setTimeout(() => {
      this.saidaDosInputs = 1;
      this.salvarDados.push({ name: this.name, price: this.price, imageURL: this.imageURL })
      this.valorBalanca = 0;
      for(let i = 0; i < this.salvarDados.length; i ++){
        this.salvaInt = Number(this.salvarDados[i].price);
        this.valorBalanca = Number(this.valorBalanca + this.salvaInt)
        this.salvaInt = 0;
      }
    }, 0);

    
  }

  salvarDados = []
  name = "";
  price = "";

  contArr = [];
  cont = 0;

  img64 = undefined;

  mudanca(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.img64 = reader.result;
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }

  

}

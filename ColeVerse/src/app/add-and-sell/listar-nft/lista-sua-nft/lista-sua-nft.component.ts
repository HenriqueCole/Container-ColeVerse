import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-sua-nft',
  templateUrl: './lista-sua-nft.component.html',
  styleUrls: ['./lista-sua-nft.component.css']
})
export class ListaSuaNFTComponent implements OnInit {

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  idPessoa = localStorage.getItem('IdUSER');

  listaNFT = []
  objeto = {}
  ngOnInit() {
    this.usuarioService.buscarNFT(localStorage.getItem('IdUSER')).then((resultado: any) =>{
      if (resultado.length != 0){
        resultado.forEach(element => {
          this.listaNFT.push(element);
        });
      }
      console.log("LISTAA:",this.listaNFT)
    })
  }

  imageURL
  teste = 0;
  openModal;

  
  images = []

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

  mudanca(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.img64 = reader.result;    
    };
  }

  clickBotao() {
    // this.usuarioService.inserirNFT(this.name, this.imageURL, this.price);

    fetch('/api/inserir_nft',
      {
        method: 'POST',
        body: JSON.stringify({
          nome: this.name,
          image: this.imageURL,
          price: this.price,
          userID: localStorage.getItem("IdUSER")
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
    console.log("CONTAINER NFT: ",this.contArr[this.cont - 1]);
    console.log("OUTRO CONTAINER NFT: ",this.contArr[this.cont - 2]);
    this.teste == 0;
    var item = document.createElement('li');
    var image = document.createElement('img');
    image.src = this.images[this.cont];
    console.log("LI: ",item)
    image.id = 'imagemSalva'
    this.openModal = 2;


    image.style.height = '350px';
    image.style.width = '350px';
    image.style.margin = '-137px 0px 0px 0px';

    setTimeout(() => {
      this.saidaDosInputs = 1;
      this.salvarDados.push({ name: this.name, price: this.price, imageURL: this.imageURL })
    }, 0);
    setTimeout(() => {
      document.location.reload();
    }, 0);
    

  }

  salvarDados = []

  name = "";
  price = "";

  contArr = [];
  cont = 0;

  editNFT(indice) {
    
    console.log(indice)
    swal("Configuration of your NFT!", {
      buttons: ["Remove", true],
    })
    .then((value) => {
      switch (value) {
        case "catch":
          // this.usuarioService.removerNFT(indice+1)
          swal("NFT removed!", "", "success");
          break;
      }
    });
  }

  img64 = undefined;
}

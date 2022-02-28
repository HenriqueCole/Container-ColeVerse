import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/src/sweetalert2.js';
// var containerNFT = document.getElementsByClassName('.container');


@Component({
  selector: 'app-lista-sua-nft',
  templateUrl: './lista-sua-nft.component.html',
  styleUrls: ['./lista-sua-nft.component.css']
})
export class ListaSuaNFTComponent implements OnInit {

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

  clickBotao() {

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
    console.log(item)
    image.id = 'imagemSalva'
    this.openModal = 2;


    image.style.height = '350px';
    image.style.width = '350px';
    image.style.margin = '-137px 0px 0px 0px';

    setTimeout(() => {
      this.saidaDosInputs = 1;
      this.salvarDados.push({ name: this.name, price: this.price, imageURL: this.imageURL })
    }, 0);

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1300,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Your NFT has been saved'
    })


  }

  salvarDados = []

  name = "";
  price = "";

  contArr = [];
  cont = 0;

  editNFT() {
    Swal.fire({
      title: 'Configuration of your NFT',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Edit',
      denyButtonText: `Remove`,
    }).then((result) => {
      if (result.isConfirmed) {
        let timerInterval
        Swal.fire({
          title: 'Redirecting...',
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
        setTimeout(() => {
          this.router.navigate(['/editarNFTListada']);
        }, 1000);

      } else if (result.isDenied) {
        Swal.fire('NFT removed!', '', 'success');
        var containerNFT = document.getElementsByClassName(`.container`);
        // containerNFT.remove();
      }
    })

  }

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

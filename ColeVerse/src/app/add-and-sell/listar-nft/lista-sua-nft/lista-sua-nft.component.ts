import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
var lista = document.querySelector('ul')


@Component({
  selector: 'app-lista-sua-nft',
  templateUrl: './lista-sua-nft.component.html',
  styleUrls: ['./lista-sua-nft.component.css']
})
export class ListaSuaNFTComponent implements OnInit {
  
  constructor(private router: Router) { }
  
  
  ngOnInit() {
  }
  

  imageURL 
  teste
  openModal

  mostrarImagem(event){
    const file = new FileReader
    file.onload = (e) => {
      this.imageURL = e.target.result;
      var item = document.createElement('li');
      var image = document.createElement('img');
      image.src = this.imageURL;
      console.log(item)
      item.appendChild(image);
      lista.appendChild(item);
    }
    this.teste = 1
    file.readAsDataURL(event.target.files[0])
  }


  
  abrirModal(){
    this.openModal = 1
  }
  
}

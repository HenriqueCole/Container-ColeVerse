import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
      setTimeout(( )=>{
        document.querySelector('#imgNFT').remove()
        this.imageURL = ""
      }, 3000)
    }
    this.teste = 1
    file.readAsDataURL(event.target.files[0])
  }


  abrirModal(){
    this.openModal = 1
  }

  clickBotao(){
    var containerIMG = document.createElement('div')
    var item = document.createElement('li');
    var image = document.createElement('img');
    image.src = this.imageURL;
    console.log(item)
    containerIMG.appendChild(image);
    item.appendChild(containerIMG)
    document.getElementById("SavedNFT").appendChild(containerIMG);
    image.id = 'imagemSalva'
    this.openModal = 2;

    image.style.height = '350px';
    image.style.width = '350px';
    containerIMG.id = 'containerIMG'
    containerIMG.style.backgroundColor = 'blue';
    containerIMG.style.display = 'flex';
    containerIMG.style.justifyContent = 'center';
    containerIMG.style.alignItems = 'center';
  }

  
}

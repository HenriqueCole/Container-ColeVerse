import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }
  

  buscarUsuarios() { 
    return new Promise((resolvido , rejeitado) =>{
      fetch('/api/buscar_usuario', {
        method: 'POST', 
        headers: {
          'Content-type': 'aplication/jason'
        }
      }).then(resultado => resultado.json())
      .then(result => resolvido(result))
      .catch(rejeitado);
    })
  }

  inserirNFT(name, imageURL, price){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/inserir_nft', {
        method: 'POST',
        body: JSON.stringify(
          {
            name, imageURL, price
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        return result.json();
    }).then(function (dados){
        console.log(dados);
    }).catch(function(erro) {
        console.log(erro);
    })
    })
  }

  buscarLogin(name, password){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(
          {
            name, password 
          })
          ,
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(resultado => resultado.json())
      .then(resolvido => resolve(resolvido))
      .catch(rejeitado);
    })
  }

  inserirVendedor(id){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/inserir_vendedor', {
        method: 'POST',
        body: JSON.stringify(
          {
            id
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        return result.json();
    }).then(function (dados){
        console.log(dados);
    }).catch(function(erro) {
        console.log(erro);
    })
    })
  }

  buscarVendedor(){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/buscarVendedor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(resultado => resultado.json())
      .then(resolvido => resolve(resolvido))
      .catch(rejeitado);
    })
  }


}

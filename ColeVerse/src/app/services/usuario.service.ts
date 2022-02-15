import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }
  

  buscarUsuarios() { 
    return new Promise((resolvido , rejeitado) =>{


      fetch('/api/login', {
        method: 'POST', 
        headers: {
          'Content-type': 'aplication/jason'
        }
      }).then(resultado => resultado.json())
      .then(result => resolvido(result))
      .catch(rejeitado);
    })
  }

}

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
      .then(resolvido)
      .catch(rejeitado);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login-v2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private socialAuthService: AuthService
  ) {
}

username = '';
password = '';
    
public socialSignIn(socialPlatform : string) {
  let socialPlatformProvider;
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

  this.socialAuthService.signIn(socialPlatformProvider).then(
    (userData) => {
      console.log(socialPlatform+" sign in data : " , userData);
      // Now sign-in with userData
      // ...
    this.goToAddSell()
    }
  );
}


  ngOnInit() {
    this.usuarioService.buscarUsuarios()
    .then(resultado => {
      console.log('RESULTADO:', resultado)
    }).catch(erro => {
      console.log('ERRO AO BUSCAR USUÁRIOS:', erro)
    })
  }

  goToAddSell(){
    // this.router.navigate(["/telaAddAndSell"])
//     fetch('/api/',
//     {  
//         method: 'POST',
//         body: JSON.stringify(
//             {
//                 nickname: this.username, password: this.password
//             }
//         ), 
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
// ).then(function (result) {
//     return result.json();
// }).then(function (dados){
//     console.log(dados);
//     alert('login efetuado')
// }).catch(function(erro) {
//     console.log(erro);
// })
  }

}


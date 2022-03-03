import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login-v2';
import Swal from 'sweetalert2'

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

  user = '';
  password = '';


  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'You are logged in with Google!',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(() => {
          this.router.navigate(["/telaAddAndSell"])
        }, 1600);
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


  goToAddSell() {
    this.usuarioService.buscarUsuarios()
      .then((resultado: User[]) => {
        for (let i = 0; i < resultado.length; i++) {
          if (this.user === resultado[i].NOME && this.password === resultado[i].PASSWORD) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'You are logged in!',
              showConfirmButton: false,
              timer: 1500
            })
            setTimeout(() => {
              this.router.navigate(["/telaAddAndSell"])
            }, 1600);
            return
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Wrong credentials',
              showConfirmButton: false,
              timer: 900
            })
          }
        }
      })

  }

  loginMeta() {
    if (ethereum && ethereum.isConnected()) {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then(result => {
        console.log(result);
      })
    } else {
      alert('É necessário instalar a extensão do metamask')
    }
  }


}
interface User {
  NOME: String;
  PASSWORD: String;
}

// window.ethereum.request({method: 'eth_requestAccounts'}).then(result => {
//   console.log(result[0]);
// })
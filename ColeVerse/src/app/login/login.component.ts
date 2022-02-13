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

  username = '';
  password = '';

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
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

  goToAddSell() {
    setTimeout(() => {
      this.router.navigate(["/telaAddAndSell"])
    }, 1600);

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'You are logged in!',
      showConfirmButton: false,
      timer: 1500
    })
  }
}


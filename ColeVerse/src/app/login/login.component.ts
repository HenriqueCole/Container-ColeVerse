import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login-v2';
import swal from 'sweetalert'

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
        swal("Login successful!", "Login with Google!", "success");
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
    console.log("ENTROU NA FUNCAO")
    this.usuarioService.buscarLogin(this.user, this.password).then(resultado => {
      if(resultado != ""){
        localStorage.setItem("USER: ", this.user)
        localStorage.setItem("PASSWD: ", this.password)
        this.router.navigate(["/telaAddAndSell"])
      }
    })
    console.log("SAIU DA UFNCAO")
  }

  // loginMeta() {
  //   if (ethereum && ethereum.isConnected()) {
  //     window.ethereum.request({ method: 'eth_requestAccounts' }).then(result => {
  //       console.log(result);
  //     })
  //   } else {
  //     alert('É necessário instalar a extensão do metamask')
  //   }
  // }


}
interface User {
  NOME: String;
  PASSWORD: String;
}

// window.ethereum.request({method: 'eth_requestAccounts'}).then(result => {
//   console.log(result[0]);
// })
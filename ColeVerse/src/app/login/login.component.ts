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
  id = '';


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
    this.usuarioService.buscarLogin(this.user, this.password, this.id).then(resultado => {
      if(resultado != ""){
        localStorage.setItem("USER", this.user)
        localStorage.setItem("PASSWORD", this.password)
        localStorage.setItem("ID", this.id)
        swal("Login success!", "", "success");
        setTimeout(() => {
          this.router.navigate(['/telaAddAndSell'])
        }, 1000);
      } else {
        swal("Wrong Credentials!", "", "error");
      }
    })


    fetch('/api/login',
    {
        method: 'POST',
        body: JSON.stringify(
            {
                name: this.user, password: this.password
            }
        ),
        headers: {
            'Content-Type': 'application/json'
        }
    }
  ).then(function (result){
    return result.json();
  }).then((dados)=>{
      localStorage.setItem('login', this.user);
      localStorage.setItem('senha', this.password);
      localStorage.setItem('ID', this.id);
  
   }).catch(function(erro){
    console.log(erro)
  })
    
  }
}


  interface User {
    NOME: String;
    PASSWORD: String;
  }
    
  
  // loginMeta() {
  //     if (ethereum && ethereum.isConnected()) {
  //       window.ethereum.request({ method: 'eth_requestAccounts' }).then(result => {
  //         console.log(result);
  //       })
  //     } else {
  //       alert('É necessário instalar a extensão do metamask')
  //     }
  //   }
  
  // window.ethereum.request({method: 'eth_requestAccounts'}).then(result => {
  //   console.log(result[0])};
  


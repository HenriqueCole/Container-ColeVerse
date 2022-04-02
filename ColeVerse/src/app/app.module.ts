import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddAndSellModule } from './add-and-sell/add-and-sell.module';
import { SellNFTModule } from './add-and-sell/sell-nft/sell-nft.module';
import { ListarNFTModule } from './add-and-sell/listar-nft/listar-nft.module';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from "angular-6-social-login-v2";
import { FormsModule } from '@angular/forms';
import CheckLogged from './checkLogged';
import { BuyNftModule } from './add-and-sell/buy-nft/buy-nft.module';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("137398670366-t26i90c6re4qg5rnjugbiojqegidccjp.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', component: LoginComponent, canActivate: [
      ]},
    ]),
    BrowserModule,
    AddAndSellModule,
    SellNFTModule,
    ListarNFTModule,
    SocialLoginModule,
    FormsModule,
    BuyNftModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

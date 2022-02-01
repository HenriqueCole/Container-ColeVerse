import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddAndSellModule } from './add-and-sell/add-and-sell.module';
import { SellNFTModule } from './add-and-sell/sell-nft/sell-nft.module';

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
    SellNFTModule
  ],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }

import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { UsuarioService } from "./services/usuario.service";
 
@Injectable()
class CheckLogged implements CanActivate{
    usuarios: any;
    constructor(
        private router: Router,
        private usuarioService: UsuarioService
    ){}
 
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
        ): Observable<boolean> | Promise<boolean> | boolean {
 
            let username = localStorage.getItem('USER')
            let password = localStorage.getItem('PASSWORD')
            
            if(username && password){
                return true;
            } else {
                this.router.navigate(["/"]);
                return false;
            }
    }
}
 
export default CheckLogged;
import { Injectable } from '../../../../node_modules/@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '../../../../node_modules/@angular/router';
import { Observable } from '../../../../node_modules/rxjs';
import { AuthTokenService } from '../Auth/auth-token.service';
import { Router } from '@angular/router'




@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {



    constructor(private authService : AuthTokenService,
                private router:Router) {

    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot     ): boolean |
                                                  Observable<boolean> |
                                                  Promise<boolean> 
            {
                console.log("entrou no authGuard");
            if(this.authService.hasToken()){
                return false;
            }return true;
            
            
             }



}

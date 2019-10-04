import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { AuthTokenService } from '../Auth/auth-token.service'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              private authTokenService: AuthTokenService
  ) { }

  loginUrl = "http://localhost:3003/auth/autenticate";




  autenticar(user: any){
   return this.http.post(this.loginUrl, user,  this.authTokenService.httpOptions)
                  
    
  }


}

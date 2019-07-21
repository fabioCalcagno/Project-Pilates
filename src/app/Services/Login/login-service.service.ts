import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { headersToString } from '../../../../node_modules/@types/selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUrl = "http://localhost:3003/auth/autenticate";

  autenticar(user: any){
   return this.http.post(this.loginUrl, user);
  
  }


}

import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode'; 
import { Login } from '../../login/login';
import { HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  constructor(  ) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + `${this.getToken()}`
    })
  };

   setToken(token: any){
    return window.localStorage.setItem('authToken', token)
    console.log(token) 
   }

   getToken(){
      return window.localStorage.getItem('authToken');
   }

   showJwt(){
    const user = jwt_decode(this.getToken()) as Login;
    return user;
   }

  


  
  
}

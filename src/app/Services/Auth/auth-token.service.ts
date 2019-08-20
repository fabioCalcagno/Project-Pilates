import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode'; 
import { Login } from '../../login/login';
import { HttpHeaders } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  constructor(  ) { }
  
  private headers = new  HttpHeaders();

  httpOptions = {
    headers:  ({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + `${this.getToken()}`,
     
    })
  };

   setToken(token: any){
    return window.localStorage.setItem('authToken', token);
   }

   getToken(){
      return window.localStorage.getItem('authToken');
   }

   showJwt(){
    const user = jwt_decode(this.getToken()) as Login;
    return user;
   }

   hasToken(){
    return  this.headers.has('Authorization');
     
   }



  


  
  
}

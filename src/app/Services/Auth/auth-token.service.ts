import { Injectable, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode'; 
import { Login } from '../../login/login';
import { HttpHeaders } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {


  constructor(    ) { }
  
  private headers = new  HttpHeaders()

  httpOptions;



  setHeaderToken(token){
    this.httpOptions = {
      headers:  ({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + token,
       
      })
    }
    window.localStorage.setItem('token', token);
    console.log(this.getHeaderToken())
  }

  

getHeaderToken(){
 return this.httpOptions = {
    headers:  ({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + `${this.getToken()}`,
     
    })
  }
}


/* 
   setToken(token: any){
    return window.localStorage.setItem('authToken', token);
   }
 */
   getToken(){ 
      return window.localStorage.getItem('token');
   }

   showJwt(){
    const user = jwt_decode(this.getToken()) as Login;
    return user;
   }

   hasToken(){
     console.log(this.getToken())
    return  this.headers.has('Authorization');
     
   }



  


  
  
}

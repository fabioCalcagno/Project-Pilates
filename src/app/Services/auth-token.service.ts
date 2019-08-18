import { Injectable } from '@angular/core';
import { AuthTokenMidleware} from '../../../Api/src/app/middlewares/auth';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode'; 
import { Login } from '../login/login';




@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {


  
  constructor(  ) { }

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

import { Injectable } from '@angular/core';
import { AuthTokenMidleware} from '../../../Api/src/app/middlewares/auth';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {


  
  constructor(
   
              ) { }

   setToken(token: any){
    return window.localStorage.setItem('authToken', token)
    console.log(token) 
   }

   verifyToken(){
    
   }

  


  
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUrl = "http://localhost:3003/auth/autenticate";

 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'token'
    })
  };


  autenticar(user: any){
   return this.http.post(this.loginUrl, user,this.httpOptions /* , { observe:'response' } */)
                   /*   .pipe(tap(res =>{
                     const authToken = res.headers.get('x-access-token');
                     console.log("este aqui" , authToken)
                   }) ) */
    
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUrl = "http://localhost:3003/auth/autenticate";

  autenticar(user: any){
   return this.http.post(this.loginUrl, user/* , { observe:'response' } */)
                   /*   .pipe(tap(res =>{
                     const authToken = res.headers.get('x-access-token');
                     console.log("este aqui" , authToken)
                   }) ) */
    
  }


}

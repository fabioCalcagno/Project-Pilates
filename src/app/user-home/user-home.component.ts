import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '../../../node_modules/@angular/forms';
import { AuthTokenService } from '../Services/auth-token.service';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';



@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  private user:FormGroup;

  constructor(private formBuilder:FormBuilder,
              private authToken : AuthTokenService,
              private router: Router,
            private http: HttpClient   ) { }

 
  userX = this.authToken.showJwt();
     url = 'http://localhost:3003/getById/sjhdf';

  ngOnInit() {
     
   this.http.get(this.url,{observe: 'response'} ).pipe(tap(res =>{
     res.headers
   
  }) ) 
   .subscribe(sucess => {
     
      if(sucess) this.router.navigateByUrl('www.google.com');
      else this.router.navigate(['/']);
   })
  }


}

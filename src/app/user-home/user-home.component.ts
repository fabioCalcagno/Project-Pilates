import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '../../../node_modules/@angular/forms';
import { AuthTokenService } from '../Services/Auth/auth-token.service';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';





@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  private user: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authToken: AuthTokenService,
    private router: Router,
    private http: HttpClient) { }

  url = 'http://localhost:3003/getById/sjhdf';

  ngOnInit() {

    this.http.get(this.url, this.authToken.httpOptions).pipe(tap(res => {
    }))
      .subscribe(sucess => {
        if (sucess) alert('ok')
        else  this.router.navigate(['/error']);  // em construção
      })
  }


}

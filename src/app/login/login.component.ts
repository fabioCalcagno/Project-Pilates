import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

import {Login} from './login';
import { LoginService } from '../Services/Login/login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  user: FormGroup;
  error: any = '';
  userNameInput: any;

  @ViewChild('userNameInput')

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private loginService: LoginService ) {
              }
            // tslint:disable-next-line: no-trailing-whitespace
            
  ngOnInit() {
    this.user = this.formBuilder.group({
        username: [null],
        password: [null]
    });
  }

  onSubmit() {
    console.log(this.user.value);
    this.login = this.user.value;
    console.log(this.login.username +  ' e senha ' + this.login.password);
    this.loginService.autenticar(this.login).subscribe(( signin: any) => {
        if (signin.token) {
          this.user.reset();
          this.userNameInput.nativeElement.focus();
          this.router.navigate(['userHome']);
         } else {
            this.user.reset();
            this.userNameInput.nativeElement.focus();
          }

    }, ( error: any ) => { this.error = error.error.error; }
    );

    console.log(this.error);

  }

}

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Login } from './login';
import { LoginService } from '../Services/Login/login-service.service';
import { AuthTokenService } from '../Services/auth-token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  user: FormGroup;
  error: any = '';


  @ViewChild('userNameInput', { static: false }) userNameInput: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authToken: AuthTokenService,
    private loginService: LoginService) {
  }
  // tslint:disable-next-line: no-trailing-whitespace

  ngOnInit() {
    this.user = this.formBuilder.group({
      username: [null],
      password: [null]
    });
  }

  onSubmit() {
    this.login = this.user.value;
    this.loginService.autenticar(this.login)
                     .subscribe((signin: any) => {
        if (signin.token) {
          const token = signin.token
                this.authToken.setToken(token);
                this.router.navigate(['userHome']);
        }
        else {
          this.user.reset();
          this.userNameInput.nativeElement.focus();
        }

      }, (error: any) => {
        this.error = error.error.error;
        this.userNameInput.nativeElement.focus();
      }
      );

    console.log(this.error);

  }

}

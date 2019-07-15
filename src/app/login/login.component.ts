import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

import {Login} from './login';
import{ LoginService } from '../Services/Login/login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : Login = new Login()
  user: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private router: Router, 
              private loginService: LoginService ) {

   }
  

  ngOnInit() {
    this.user = this.formBuilder.group({
        name: [null], 
        password: [null]
    })
    
  }

 

  onSubmit(){
    console.log(this.user.value);
    this.login = this.user.value;
    this.loginService.autenticar(this.login).subscribe((signin:any) =>{
        if(signin.token) this.router.navigate(['userHome']);

    })

    
  }

}

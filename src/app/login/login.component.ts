import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, FormBuilder} from '@angular/forms';

import {Login} from './login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: FormGroup;

  constructor(private formBuilder: FormBuilder) {

   }
  

  ngOnInit() {
    this.user = this.formBuilder.group({
        name: [null], 
        password: [null]
    })
    
  }

  public login:Login = new Login();

  onSubmit(){
    console.log(this.user.value);
    
  }

}

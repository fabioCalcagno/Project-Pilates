import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '../../../node_modules/@angular/forms';
import { AuthTokenService } from '../Services/auth-token.service';
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  private user:FormGroup;

  constructor(private formBuilder:FormBuilder,
              private authToken : AuthTokenService   ) { }

 
  userX = this.authToken.showJwt();


  ngOnInit() {
     
   
  }


}

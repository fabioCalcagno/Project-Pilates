import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '../../../node_modules/@angular/forms';
import { AuthTokenService } from '../Services/Auth/auth-token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private authToken : AuthTokenService   ) { }


user = this.authToken.showJwt();


  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  private user:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

 
/* private user = window.localStorage.getItem('authToken')
  */

  ngOnInit() {
     
   
  }


}

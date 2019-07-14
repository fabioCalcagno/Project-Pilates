import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
 import { LoginComponent } from './login.component';


@NgModule({
  declarations: [LoginModule],
  imports: [
    CommonModule, 
    ReactiveFormsModule
  ]
})
export class LoginModule { }

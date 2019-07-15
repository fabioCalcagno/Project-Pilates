import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from '../app/user-home/user-home.component';



const routes: Routes = [
  {path:    ''     , component: LoginComponent},
  {path: 'userHome', component: UserHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

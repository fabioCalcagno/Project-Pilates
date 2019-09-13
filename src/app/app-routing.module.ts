import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from '../app/user-home/user-home.component';
import { AuthGuard } from './Services/Auth/auth.guard';
import { VideoAulasComponent } from './video-aulas/video-aulas.component';




const routes: Routes = [
  {
    path: '',
    component: LoginComponent,



  },
  {
    path: 'userHome',
    component: UserHomeComponent,
    canActivate: [AuthGuard],
    
  },
  {
    path: 'videoaulas',
    component: VideoAulasComponent,
    canActivate: [AuthGuard],
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

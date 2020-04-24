import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path: 'login',component : LoginComponent},
  {path: '',component : LoginComponent},
  {path: '**',component : ErrorComponent},
  {path: 'welcome',component : WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { LisTodosComponent } from './lis-todos/lis-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { ReouteGuardService } from './service/reoute-guard.service';


const routes: Routes = [
  {path: 'login',component : LoginComponent},
  {path: '',component : LoginComponent},
  {path: 'welcome/:name',component : WelcomeComponent,canActivate:[ReouteGuardService]},
  {path: 'todos',component : LisTodosComponent,canActivate:[ReouteGuardService]},
  {path: 'logout',component : LogoutComponent,canActivate:[ReouteGuardService]},
  {path: '**',component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

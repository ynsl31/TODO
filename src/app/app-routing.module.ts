import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { LisTodosComponent } from './lis-todos/lis-todos.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path: 'login',component : LoginComponent},
  {path: '',component : LoginComponent},
  {path: 'welcome/:name',component : WelcomeComponent},
  {path: 'todos',component : LisTodosComponent},
  {path: 'logout',component : LogoutComponent},
  {path: '**',component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

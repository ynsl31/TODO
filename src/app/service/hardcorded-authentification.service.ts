import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcordedAuthentificationService {

  constructor() { }

  authenticate(username,password){
    // console.log('before'+this.isUserLoggedIn());
    if(username==='yns'&& password==='yns'){
         
          sessionStorage.setItem('authentificationuser',username);
          // console.log('After : '+this.isUserLoggedIn())
      return true;
    }return false;
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authentificationuser')
    return !(user===null)
  }
  logout(){
    sessionStorage.removeItem('authentificationuser');
  }
}

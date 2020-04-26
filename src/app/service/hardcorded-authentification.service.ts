import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcordedAuthentificationService {

  constructor() { }

  authenticate(username,password){
    if(username==='yns'&& password==='yns'){
      return true;
    }return false;
  }
}

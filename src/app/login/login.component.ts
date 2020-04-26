import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcordedAuthentificationService } from '../service/hardcorded-authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username='yns'
password = ''
errormsg ='Invalid credentials'
invalidlogin= false
  //Router 
  //Angular.GiveMeRouter
  //DependencyInjection
  constructor(private router : Router
    , private hardcodeAurhentificationService : HardcordedAuthentificationService) { }

  ngOnInit(): void {
  } 
  handlelogin():void {
    // console.log(this.username); 
    // if(this.username==='yns'&& this.password==='yns'){
      if(this.hardcodeAurhentificationService.authenticate(this.username,this.password)){
      //redirect
      this.router.navigate(['welcome'])
      this.invalidlogin= false
    }else{
      this.invalidlogin=true
    }
       }
}

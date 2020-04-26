import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router : Router) { }

  ngOnInit(): void {
  } 
  handlelogin():void {
    // console.log(this.username); 
    if(this.username==='yns'&& this.password==='yns'){
      //redirect
      this.router.navigate(['welcome'])
      this.invalidlogin= false
    }else{
      this.invalidlogin=true
    }
       }
}

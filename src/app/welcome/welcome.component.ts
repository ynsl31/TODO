import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  messssage = 'some message'
  name = ''
  welcomemsg:string
  constructor(private route:ActivatedRoute,private servicehello :WelcomeDataService) { 
 
  }
  getwelcomemsg(){
    // this.servicehello.executeHelloWorld();
    console.log(this.servicehello.executeHelloWorld());
    this.servicehello.executeHelloWorld().subscribe(
      response => this.handleSuccessfulResponse(response)
    )};

    //respose from helloWorldPathVariable Spring service
    getwelcomemsgwithparam(){
      // this.servicehello.executeHelloWorld();
      console.log(this.servicehello.executeHelloWorld());
      this.servicehello.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
        response => this.handleSuccessfulResponse(response)
      )};

  ngOnInit(): void {

    // console.log(this.route.snapshot.params['name'])
  this.name =  this.route.snapshot.params['name'];
  }
  handleSuccessfulResponse(response){
    // console.log(response.msg);
    this.welcomemsg = response.msg;
  }

}

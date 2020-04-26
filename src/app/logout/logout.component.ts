import { Component, OnInit } from '@angular/core';
import { HardcordedAuthentificationService } from '../service/hardcorded-authentification.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( public hdath : HardcordedAuthentificationService) { }

  ngOnInit(): void {
    this.hdath.logout()
  }

}

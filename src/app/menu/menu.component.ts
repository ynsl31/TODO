import { Component, OnInit } from '@angular/core';
import { HardcordedAuthentificationService } from '../service/hardcorded-authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // isUserLoggedIn : boolean = false;
  constructor(public hardcordedauth : HardcordedAuthentificationService) {

   }

  ngOnInit(): void { }
  //  this.isUserLoggedIn =this.hardcordedauth.isUserLoggedIn();  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
errormsg='An Erroro Occured ! Contact Support at ***'
  constructor() { }

  ngOnInit(): void {
  }

}

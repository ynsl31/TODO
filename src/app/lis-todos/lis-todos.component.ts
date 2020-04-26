import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor (
    public id : number,
    public description : string,
    public done : boolean,
    public date : Date
  ){

  }
}
@Component({
  selector: 'app-lis-todos',
  templateUrl: './lis-todos.component.html',
  styleUrls: ['./lis-todos.component.css']
})
export class LisTodosComponent implements OnInit {
  // todo = {
  //     id : 1 ,
  //     description : 'learn to Dance'

  // }
  todos = [
    new Todo(1,'Learn to Dance',false,new Date),
    new Todo(2,'Become an Expert at ANgular',false,new Date),
    new Todo(3,'Visit Moroccoo',false,new Date)
    // {id : 1,description :'Learn to Dance'},
    // {id : 2,description :'Become an Expert at ANgular'},
    // {id : 3,description :'Visit Moroccoo'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

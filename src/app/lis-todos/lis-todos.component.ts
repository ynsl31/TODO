import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

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
  todos :Todo[]
  message :string
  // todo = {
  //     id : 1 ,
  //     description : 'learn to Dance'

  // }

  //  [
  //   new Todo(1,'Learn to sing',false,new Date),
  //   new Todo(2,'Become an Expert at ANgular',false,new Date),
  //   new Todo(3,'building a todo app ',false,new Date)
  //   // {id : 1,description :'Learn to Dance'},
  //   // {id : 2,description :'Become an Expert at ANgular'},
  //   // {id : 3,description :'Visit Moroccoo'}
  // ]
  constructor(private todoservice:TodoDataService) { }

  ngOnInit(): void {
    this.refreshTodos();
  }
  refreshTodos(){
    this.todoservice.getTodos('ynsl31').subscribe(
      response =>{
        console.log(response);
        this.todos=response;
      }
    );
  }
  deletTodo(id){
    console.log(`delete todo ${id}`);
    this.todoservice.deleteTodo('ynsl31',id).subscribe(
      response=> {console.log(response);
      this.message=`Delete of todo ${id} Successful !`;
      this.refreshTodos();
    }
    );

  }

}

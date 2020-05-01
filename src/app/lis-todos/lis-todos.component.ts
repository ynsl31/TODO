import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

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
  
  constructor(private todoservice:TodoDataService,private router:Router) { }

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
  updateTodo(id){
    this.router.navigate(['todos',id]);
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
  addTodo(){
    this.router.navigate(['todos',-1])

  }
  
}

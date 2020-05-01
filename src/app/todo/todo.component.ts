import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../lis-todos/lis-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
id:number
todo:Todo
  constructor(private todoService:TodoDataService,
    private route :ActivatedRoute ,private router : Router )
  { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
   this.todo= new Todo(this.id,'',false,null); 

   if(this.id != -1){
    this.todoService.retriveTodo('ynsl31',this.id)
    .subscribe(
      data => this.todo=data
    )
   }
  
  }
  saveTodo(){
    if(this.id === -1){
      this.todoService.createTodo('ynsl31',this.todo)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }  )
  }else{
    this.todoService.updateTodo('ynsl31',this.id,this.todo)
    .subscribe(
      data => {
        console.log(data);
        this.router.navigate(['todos']);
      }  )
    

  }

}
  

}

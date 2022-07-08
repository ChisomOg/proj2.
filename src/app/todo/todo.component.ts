import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [
    trigger('todoItem', [
      transition(':leave', [
        animate(200, style({
          opacity: 0,
          height: 0,
          marginBottom: 0
        }))
      ])
    ])
  ]
})
export class TodoComponent implements OnInit {

  todo?: Todo[]

  constructor( private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.todo = this.todoService.getTodos()
  }

  toggleCompleted(todo: Todo){
    
    this.todoService.updateTodo(todo.id, {completed: !todo.completed})
    
  }
  editClick(todo: Todo){
    this.router.navigate(['/todo', todo.id])
  }

  deleteClick(todo: Todo){
    this.todoService.deleteTodo(todo.id)
  }

  trackById(index: any, item: Todo){
    return item.id

  }

}

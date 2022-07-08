import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  
  todo: Todo | undefined;

  constructor(private todoService: TodoService, private router: Router,
     private route: ActivatedRoute,
     private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get("id")
      if (idParam !== null) {
        console.log(idParam)
  
        this.todo = this.todoService.getTodo(idParam) 
      }
    })
  }
  
  formSubmit(form: NgForm){
    if (this.todo !== undefined){
      this.todoService.updateTodo(this.todo.id, form.value)
      this.router.navigateByUrl("/todo")
      this.notificationService.show('Todo Updated')
    }
  }

}

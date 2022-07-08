import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnDestroy {

  todo: Todo[] = []

  storageListen!: Subscription

  constructor() {
    this.loadState()

    this.storageListen =fromEvent(window, 'storage')
    .subscribe((event: Event) => {
    this.loadState()
    })
  }
  ngOnDestroy(): void {
    if (this.storageListen) this.storageListen.unsubscribe()
  }

  getTodos() {
    return this.todo
  }

  getTodo(id: string) {
    return this.todo.find(t => t.id === id)
  }
  addTodo(todo: Todo) {
    this.todo.push(todo)

    this.saveState()
  }

  updateTodo(id: string, updatedTodoFields: Partial<Todo>){
    const todo = this.getTodo(id)
    Object.assign(todo, updatedTodoFields)
    this.saveState()
  }

  deleteTodo(id: string) {
    const todoIndex = this.todo.findIndex(t => t.id === id)
    if (todoIndex == -1) return
    this.todo.splice(todoIndex, 1)
    this.saveState()
  }

  saveState(){
    localStorage.setItem('todo', JSON.stringify(this.todo))
  }

  loadState(){
    try {
      const todoStorage = JSON.parse(localStorage.getItem('todo')!)
     
      this.todo.length = 0
      this.todo.push(...todoStorage)
    }catch(e){
      console.log('There was an error')
      console.log(e)
    }
  }
}

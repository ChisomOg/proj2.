import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { EditBookmarkComponent } from './edit-bookmark/edit-bookmark.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { ManageBookmarkComponent } from './manage-bookmark/manage-bookmark.component';
import { NoteComponent } from './note/note.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path: 'bookmark', component: BookmarkComponent, data: {tabN : 0} },
  {path: 'bookmark/add', component: AddBookmarkComponent },
  {path: 'bookmark/manage', component: ManageBookmarkComponent, children: [
    {path: ':id', component: EditBookmarkComponent},
  ]},
  {path: 'bookmark/manage/:id', component: EditNoteComponent},
  {path: 'todo', component: TodoComponent, data: {tabN : 1} },
  {path: 'todo/add', component: AddTodoComponent },
  {path: 'todo/:id', component: EditTodoComponent },
  {path: 'note', component: NoteComponent, data: {tabN : 2} },
  {path: 'note/add', component: AddNoteComponent},
  {path: 'note/:id', component: EditNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

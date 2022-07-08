import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { TodoComponent } from './todo/todo.component';
import { NoteComponent } from './note/note.component';
import { BookmarkTileComponent } from './bookmark-tile/bookmark-tile.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { ManageBookmarkComponent } from './manage-bookmark/manage-bookmark.component';
import { EditBookmarkComponent } from './edit-bookmark/edit-bookmark.component';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarkComponent,
    TodoComponent,
    NoteComponent,
    BookmarkTileComponent,
    AddNoteComponent,
    NoteCardComponent,
    EditNoteComponent,
    TodoItemComponent,
    AddTodoComponent,
    EditTodoComponent,
    AddBookmarkComponent,
    ManageBookmarkComponent,
    EditBookmarkComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

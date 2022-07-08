import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService implements OnDestroy {

  note: Note[]= []

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

  getNotes() {
    return this.note
  }

  getNote(id: string) {
    return this.note.find(n => n.id === id)
  }

  addNote(note: Note) {
    this.note.push(note)
    this.saveState()
  }

  updateNote(id: string, updatedFields: Partial<Note>){
    const note = this.getNote(id)
    Object.assign(note, updatedFields)
    this.saveState()
  }

  deleteNote(id: string) {
    const noteIndex = this.note.findIndex(n => n.id === id)
    if (noteIndex == -1) return
    this.note.splice(noteIndex, 1)
    this.saveState()
  }

  saveState(){
    localStorage.setItem('notes', JSON.stringify(this.note))
  }

  loadState(){
    try {
      const noteStorage = JSON.parse(localStorage.getItem('notes')!)
    
      this.note.length = 0
      this.note.push(...noteStorage)
    }catch(e){
      console.log('There was an error')
      console.log(e)
    }
  }


}

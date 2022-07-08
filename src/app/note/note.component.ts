import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  note: Note[] | undefined

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.note = this.noteService.getNotes()
  }

}

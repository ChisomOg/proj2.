import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  note: Note | undefined;

  constructor(private route: ActivatedRoute, private noteService: NoteService,
     private router: Router, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get("id")
      if (idParam !== null) {
      console.log(idParam)

      this.note = this.noteService.getNote(idParam) 
    }
    })
  }

  formSubmit(form: NgForm){
    if (this.note !== undefined){
    this.noteService.updateNote(this.note.id, form.value)
    this.router.navigateByUrl("/note")
    this.notificationService.show('Note Updated')
  }
  }

  deleteNote() {
    if (this.note !== undefined){
    this.noteService.deleteNote(this.note?.id)
    this.router.navigateByUrl("/note")
    this.notificationService.show('Note Deleted')
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bookmark } from '../shared/bookmark.model';
import { BookmarkService } from '../shared/bookmark.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {

  constructor(private bookmarkService: BookmarkService, private router: Router,
     private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  formSubmit(form: NgForm){
    console.log(form.value)
    if (this.bookmarkService !== undefined){
    const {name, url} = form.value
    const bookmark = new Bookmark(name, url)
    this.bookmarkService.addBookmark(bookmark)
    this.router.navigateByUrl("/bookmark")
    this.notificationService.show('Bookmark Created')
    }
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Bookmark } from '../shared/bookmark.model';
import { BookmarkService } from '../shared/bookmark.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss']
})
export class EditBookmarkComponent implements OnInit {

  bookmark: Bookmark | undefined

  constructor(private bookmarkservice: BookmarkService, private route: ActivatedRoute, 
    private router: Router, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const bookmarkId = paramMap.get('id')
      if (bookmarkId !== null)
      this.bookmark = this.bookmarkservice.getBookmark(bookmarkId)
    
    })
  }
  formSubmit(form: NgForm){
    console.log(form.value)
    if (this.bookmark !== undefined){
      const {name, url} = form.value
      this.bookmarkservice.updateBookmark(this.bookmark.id, {
        name, url:new URL(url)
      })
      this.router.navigateByUrl("/bookmark")
      this.notificationService.show('Bookmark updated!')
      
      
    }
   }

   delete() {
    if (this.bookmark !== undefined){
    this.bookmarkservice.deleteBookmark(this.bookmark?.id)
    this.router.navigate(['../'], { relativeTo: this.route})
    this.notificationService.show('Bookmark deleted')
    }
  }

}

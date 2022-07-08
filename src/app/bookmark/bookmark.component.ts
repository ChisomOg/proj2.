import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../shared/bookmark.model';
import { BookmarkService } from '../shared/bookmark.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  bookmark!: Bookmark[] 

  constructor(private bookmarkService:BookmarkService) { }

  ngOnInit(): void {
    this.bookmark = this.bookmarkService.getBookmarks()
  }

}

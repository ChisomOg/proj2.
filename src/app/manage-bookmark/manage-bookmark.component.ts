import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bookmark } from '../shared/bookmark.model';
import { BookmarkService } from '../shared/bookmark.service';

@Component({
  selector: 'app-manage-bookmark',
  templateUrl: './manage-bookmark.component.html',
  styleUrls: ['./manage-bookmark.component.scss']
})
export class ManageBookmarkComponent implements OnInit {
  bookmark!: Bookmark[]

  constructor(private bookmarkservice: BookmarkService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookmark = this.bookmarkservice.getBookmarks()
  }

}

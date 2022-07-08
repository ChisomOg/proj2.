import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService implements OnDestroy{

  bookmark: Bookmark[]= []

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

  getBookmarks() {
    return this.bookmark
  }

  getBookmark(id: string) {
    return this.bookmark.find(b => b.id === id)
  }

  addBookmark(bookmark: Bookmark) {
    this.bookmark.push(bookmark)
    this.saveState()
  }

  updateBookmark(id: string, updatedFields: Partial<Bookmark>){
    const bookmark = this.getBookmark(id)
    Object.assign(bookmark, updatedFields)
    this.saveState()
  }

  deleteBookmark(id: string) {
    const bookIndex = this.bookmark.findIndex(b => b.id === id)
    if (bookIndex == -1) return
    this.bookmark.splice(bookIndex, 1)
    this.saveState()
  }

  saveState(){
    localStorage.setItem('bookmark', JSON.stringify(this.bookmark))
  }

  loadState(){
    try {
      const bookmarkStorage = JSON.parse(localStorage.getItem('bookmark')!, (key, value) => {
        if (key == 'url') return new URL(value)
        return value
      })
     
      this.bookmark.length = 0
      this.bookmark.push(...bookmarkStorage)
    }catch(e){
      console.log('There was an error')
      console.log(e)
    }
  }
}

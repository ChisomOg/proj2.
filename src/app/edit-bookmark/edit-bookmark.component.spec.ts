import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookmarkComponent } from './edit-bookmark.component';

describe('EditBoomarkComponent', () => {
  let component: EditBookmarkComponent;
  let fixture: ComponentFixture<EditBookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBookmarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

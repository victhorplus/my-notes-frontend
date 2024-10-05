import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteListContainerComponent } from './note-list-container.component';

describe('NoteListContainerComponent', () => {
  let component: NoteListContainerComponent;
  let fixture: ComponentFixture<NoteListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteListContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

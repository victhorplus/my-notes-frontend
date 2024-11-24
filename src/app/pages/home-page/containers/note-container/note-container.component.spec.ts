import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteContainerComponent } from './note-container.component';

describe('NoteContainerComponent', () => {
  let component: NoteContainerComponent;
  let fixture: ComponentFixture<NoteContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

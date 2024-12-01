import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteContainerComponent, NoteListContainerComponent } from './containers';
import { NotesService } from '../../providers/services';
import { INoteParams, Note } from '../../classes';
import { finalize, Observable, Subject, takeUntil } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DeleteNoteComponent } from './components';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, NoteListContainerComponent, NoteContainerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnDestroy {
  notes$: Observable<Note[]>;
  selectedNote: Note;
  getNotesLoading: boolean;
  noteLoading: boolean;
  onDestroy$: Subject<void>;
  
  constructor(private notesService: NotesService, private dialogServie: MatDialog){
    this.getData();
    this.onDestroy$ = new Subject();
  }

  getData(params?: INoteParams): void {
    this.getNotesLoading = true;
    this.notes$ = this.notesService.getNotes(params).pipe(
      finalize(() => this.getNotesLoading = false)
    );
  }

  onSelectNote(note: Note): void {
    this.selectedNote = note;
  }

  onAddNote(): void {
    this.selectedNote = null;
  }
  
  onDeleteNote(note: Note): void {
    const dialogRef = this.dialogServie.open(DeleteNoteComponent, { 
      width: '350px', 
      data: { note } 
    });

    dialogRef.afterClosed()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(value => {
        if(value.delete) {
          this.getData();
        }
      });
  }

  onSave(note: Note){
    if(!note.title && !note.content){ return; }

    this.noteLoading = true;
    if(note.id){
      this.notesService.updateNote(note)
        .pipe(
          finalize(() => this.noteLoading = false),
          takeUntil(this.onDestroy$)
        )
        .subscribe( note => this.selectedNote = note );
      return;
    }

    this.notesService.createNote(note)
      .pipe(
        finalize(() => this.noteLoading = false),
        takeUntil(this.onDestroy$)
      )
      .subscribe(note => {
        this.selectedNote = note;
        this.getData();
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteContainerComponent, NoteListContainerComponent } from './containers';
import { NotesService } from '../../providers/services';
import { INoteParams, Note } from '../../classes';
import { finalize, Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, NoteListContainerComponent, NoteContainerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  notes$: Observable<Note[]>;
  selectedNote: Note;
  getNotesLoading: boolean;
  noteLoading: boolean;
  
  constructor(private notesService: NotesService){
    this.getData();
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
    console.log("Deletar anotação:", note);
  }

  onSave(note: Note){
    if(!note.title && !note.content){ return; }

    this.noteLoading = true;
    if(note.id){
      this.notesService.updateNote(note)
        .pipe(finalize(() => this.noteLoading = false))
        .subscribe( note => this.selectedNote = note );
      return;
    }

    this.notesService.createNote(note)
      .pipe(finalize(() => this.noteLoading = false))
      .subscribe(note => {
        this.selectedNote = note;
        this.getData();
      });
  }
}

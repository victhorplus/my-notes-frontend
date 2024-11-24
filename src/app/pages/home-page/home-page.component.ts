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
  isLoading: boolean;
  
  constructor(private notesService: NotesService){
    this.getData();
  }

  getData(params?: INoteParams): void {
    this.isLoading = true;
    this.notes$ = this.notesService.getNotes(params).pipe(
      finalize(() => this.isLoading = false)
    );
  }

  onSelectNote(note: Note): void {
    console.log("Selecionar anotação:", note);
  }

  onAddNote(): void {
    console.log("Adicionar anotação");
  }
  
  onDeleteNote(note: Note): void {
    console.log("Deletar anotação:", note);
  }
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NoteItemComponent } from '../../components';
import { INotesParams, Notes } from '../../../../classes';
import { NotesService } from '../../../../providers/services';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-note-list-container',
  standalone: true,
  imports: [CommonModule, NoteItemComponent, MatProgressSpinnerModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './note-list-container.component.html',
  styleUrl: './note-list-container.component.scss'
})
export class NoteListContainerComponent {
  notes$: Observable<Notes[]>;
  
  constructor(private notesService: NotesService){
    this.getData();
  }

  getData(params?: INotesParams): void {
    this.notes$ = this.notesService.getNotes(params);
  }

  onSelectNote(note: Notes): void {
    console.log("Anotação selecionada: ", note)
  }

  addNote(): void {
    console.log("Adicionar anotação")
  }

  onDeleteNote(note: Notes): void {
    console.log("Anotação deletada: ", note)
  }

  search(title: string): void {
    this.getData({title});
  }
}

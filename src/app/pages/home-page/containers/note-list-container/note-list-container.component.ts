import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NoteItemComponent } from '../../components';
import { Notes } from '../../../../classes';
import { NotesService } from '../../../../providers/services';

@Component({
  selector: 'app-note-list-container',
  standalone: true,
  imports: [CommonModule, NoteItemComponent, MatProgressSpinnerModule, MatIconModule, MatButtonModule],
  templateUrl: './note-list-container.component.html',
  styleUrl: './note-list-container.component.scss'
})
export class NoteListContainerComponent {
  $notes: Observable<Notes[]>;
  
  constructor(private notesService: NotesService){
    this.getData();
  }

  getData(): void {
    this.$notes = this.notesService.getNotes();
  }

  onSelectNote(note: Notes): void {
    console.log("Anotação selecionada: ", note)
  }

  onDeleteNote(note: Notes): void {
    console.log("Anotação deletada: ", note)
  }
}

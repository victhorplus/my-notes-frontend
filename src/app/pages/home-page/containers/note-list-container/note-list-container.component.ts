import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NoteItemComponent } from '../../components';
import { INoteParams, Note } from '../../../../classes';

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
  @Output() search: EventEmitter<INoteParams>;
  @Output() select: EventEmitter<Note>;
  @Output() add: EventEmitter<void>;
  @Output() delete: EventEmitter<Note>;
  @Input() notes: Note[];
  @Input() isLoading: boolean;
  
  constructor(){
    this.search = new EventEmitter();
    this.select = new EventEmitter();
    this.add = new EventEmitter();
    this.delete = new EventEmitter();
  }

  onSelectNote(note: Note): void {
    this.select.emit(note);
  }

  onAddNote(): void {
    this.add.emit();
  }

  onDeleteNote(note: Note): void {
    this.delete.emit(note);
  }

  onSearch(params?: INoteParams): void {
    this.search.emit(params);
  }
}

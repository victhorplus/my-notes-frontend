import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Note } from '../../../../classes';

@Component({
  selector: 'app-note-item',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './note-item.component.html',
  styleUrl: './note-item.component.scss'
})
export class NoteItemComponent {
  @Input({ required: true }) note: Note;
  @Output() select: EventEmitter<Note>;
  @Output() delete: EventEmitter<Note>;

  constructor(){
    this.select = new EventEmitter();
    this.delete = new EventEmitter();
  }

  onSelect(): void {
    this.select.emit(this.note);
  }
  
  onDelete(event: Event): void {
    event.stopPropagation();
    this.delete.emit(this.note);
  }
}

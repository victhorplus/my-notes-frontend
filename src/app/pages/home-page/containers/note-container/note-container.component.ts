import { Component, Input } from '@angular/core';
import { Note } from '../../../../classes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-container.component.html',
  styleUrl: './note-container.component.scss'
})
export class NoteContainerComponent {
  @Input() note: Note;
}

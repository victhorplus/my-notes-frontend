import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Notes } from '../../../../classes';

@Component({
  selector: 'app-note-item',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './note-item.component.html',
  styleUrl: './note-item.component.scss'
})
export class NoteItemComponent {
  @Input({ required: true }) note: Notes;
}

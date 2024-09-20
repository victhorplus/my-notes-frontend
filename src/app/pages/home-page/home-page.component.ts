import { Component } from '@angular/core';
import { NotesService } from '../../providers/services';
import { Observable } from 'rxjs';
import { Notes } from '../../classes/notes.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  $notes: Observable<Notes[]>;
  
  constructor(private notesService: NotesService){
    this.$notes = this.notesService.getNotes();
  }
}

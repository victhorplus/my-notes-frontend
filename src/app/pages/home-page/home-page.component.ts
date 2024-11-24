import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteListContainerComponent } from './containers';
import { AccesTokenTimerComponent } from '../../components';
import { NotesService } from '../../providers/services';
import { INoteParams, Note } from '../../classes';
import { finalize, Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, NoteListContainerComponent, AccesTokenTimerComponent],
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
  
}

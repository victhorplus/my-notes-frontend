import { Component } from '@angular/core';
import { Task } from '../task.model';
import { AppState } from '../task.reducer';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-task.component.html',
  styleUrl: './lista-task.component.scss'
})
export class ListaTaskComponent {
  tasks: Task[];
  constructor(private store: Store<AppState>){
    this.store.select('tasks').subscribe((state: any) => {
      this.tasks = state.tasks;
    });
  }
  
}

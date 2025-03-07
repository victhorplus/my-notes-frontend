import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../task.reducer';
import { Task } from '../task.model';
import { addTask, deleteTask, updateTask } from '../task.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gerencia-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gerencia-task.component.html',
  styleUrl: './gerencia-task.component.scss'
})
export class GerenciaTaskComponent {
  @ViewChild('idTemplate') inputId: HTMLInputElement;
  tasks: Task[];
  currentTask: Task = {
    id: null, description: null, title: null
  };

  constructor(private store: Store<AppState>) {
    this.store.select('tasks').subscribe((state: any) => {
      this.tasks = state.tasks;
      console.log("state: ", state)
    });
    this.store.subscribe((val) => {
      console.log("val: ", val)
    })
  }

  addTask(): void {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: `Task ${this.tasks.length + 1}`,
      description: 'Lorem ipsum'
    }

    this.store.dispatch(addTask({ task: newTask }));
  }

  updateTask(id: number, title: any, description: any): void {
    this.inputId.value = '';
    this.currentTask = {} as Task;
    this.store.dispatch(
      updateTask({ task: { id, title, description }})
    );
  }

  deleteTask(id: number): void {
    this.store.dispatch(deleteTask({ id }))
  }

  buscaTask(id: number): void {
    this.currentTask = this.tasks.find(task => task.id === id);
  }
}

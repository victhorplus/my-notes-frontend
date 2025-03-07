import { createSelector } from '@ngrx/store';
import { AppState } from './task.reducer';
import { Task } from './task.model';

// export const selectTasks = (state: AppState) => [] as Task[];
// export const selectTasksById = (id: number) => createSelector(selectTasks, tasks => tasks.find(task => task.id === id));
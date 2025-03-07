import { createAction, props } from '@ngrx/store';
import { Task } from './task.model';

export const addTask = createAction('[Task] Add task', props<{ task: Task }>());
export const updateTask = createAction('[Task] Update task', props<{ task: Task }>());
export const deleteTask = createAction('[Task] Delete task', props<{ id: number }>());
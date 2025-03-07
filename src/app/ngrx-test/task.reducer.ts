import { Task } from './task.model';
import { addTask, deleteTask, updateTask } from './task.actions';
import { createReducer, on } from '@ngrx/store';

export interface AppState {
    tasks: Task[]
};

export const initialState: AppState = {
    tasks: [],
};

export function taskReducer(state = initialState, action: any): AppState {
    switch(action.type){
        case addTask.type:
            return {
                ...state, 
                tasks: [...state.tasks, action.task] 
            };
        case updateTask.type:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.task.id ? action.task : task)
            }
        case deleteTask.type:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.task.id)
            }
        default:
            return state;
    }
}

function addTaskToReduce(state: AppState, action: any): AppState {
    return {
        ...state, 
        tasks: [...state.tasks, action.task]
    }
}
function updateTaskToReduce(state: AppState, action: any): AppState {
    return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.task.id ? action.task : task)
    }
}
function deleteTaskToReduce(state: AppState, action: any): AppState {
    return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.task.id)
    }
}

export const taskReducer2 = createReducer(
    initialState,
    on(addTask, addTaskToReduce),
    on(updateTask, updateTaskToReduce),
    on(deleteTask, deleteTaskToReduce)
)

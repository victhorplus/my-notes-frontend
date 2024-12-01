import { Component, EventEmitter, Input, Output, signal, WritableSignal } from '@angular/core';
import { Note } from '../../../../classes';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, map, merge, Observable, Subject, tap } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-note-container',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatProgressSpinnerModule],
  templateUrl: './note-container.component.html',
  styleUrl: './note-container.component.scss'
})
export class NoteContainerComponent {
  _note: Note = {} as Note;
  @Input() set note(value: Note){
    this._note = value || ({} as Note);
    if(!value){ 
      this.noteForm.reset();
      return; 
    }

    this.noteForm.setValue({
      id: this._note.id,
      title: this._note.title,
      content: this._note.content
    }, { emitEvent: false });
  }

  @Input() isLoading: boolean;
  @Output() save: Observable<Note>;
  noteForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.save = new EventEmitter();
    this.noteForm = this.formBuilder.group({
      id: [''],
      title: [''],
      content: ['']
    });

    this.initListeners();
  }

  initListeners(dueTime: number = 1000): void {
    const title$ = this.noteForm.get('title').valueChanges.pipe(
      tap(title => this._note.title = title)
    );
    const content$ = this.noteForm.get('content').valueChanges.pipe(
      tap(content => this._note.content = content)
    );;

    this.save = merge(title$, content$).pipe(
      debounceTime(dueTime),
      map(() => this._note)
    );
  }
  
}

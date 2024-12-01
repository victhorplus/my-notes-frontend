import { Component, Inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NotesService } from '../../../../providers/services';
import { Note } from '../../../../classes';
import { finalize } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-note',
  standalone: true,
  imports: [CommonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './delete-note.component.html',
  styleUrl: './delete-note.component.scss'
})
export class DeleteNoteComponent {
  isLoading: boolean;

  constructor(
    private notesService: NotesService, 
    private dialogRef: MatDialogRef<DeleteNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { note: Note }
  ){ }

  onCancel(): void {
    this.dialogRef.close({delete: false});
  }

  onDelete(): void {
    this.isLoading = true;
    this.notesService.deleteNote(this.data.note).pipe(
      finalize(() => this.isLoading = false)
    ).subscribe(() => {
      this.dialogRef.close({delete: true});
    })
  }
}

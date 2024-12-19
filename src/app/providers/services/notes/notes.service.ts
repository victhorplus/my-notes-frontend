import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Note } from '../../../classes/note.model';
import { INoteParams } from '../../../classes';
import { enviroment } from '../../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  baseUrl = `${enviroment.apiUrl}/notes`;

  constructor(private httpService: HttpClient) { }

  getNotes(params?: INoteParams): Observable<Note[]> {
    const httpParams: HttpParams = new HttpParams({fromObject: params as any});

    return this.httpService.get<{ data: Note[] }>(
      this.baseUrl, { params: httpParams }
    ).pipe(
      map((response) => response.data)
    );
  }

  createNote(note: Note): Observable<Note> {
    return this.httpService.post<Note>(`${this.baseUrl}`, note);
  }

  updateNote(note: Note): Observable<Note> {
    return this.httpService.put<Note>(`${this.baseUrl}/${note.id}`, note);
  }

  deleteNote(note: Note): Observable<Note> {
    return this.httpService.delete<Note>(`${this.baseUrl}/${note.id}`);
  }
}

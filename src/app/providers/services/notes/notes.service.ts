import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Note } from '../../../classes/note.model';
import { INoteParams } from '../../../classes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  baseUrl = 'http://localhost:3000/notes';

  constructor(private httpService: HttpClient) { }

  getNotes(params?: INoteParams): Observable<Note[]> {
    const httpParams: HttpParams = new HttpParams({fromObject: params as any});

    return this.httpService.get<{ data: Note[] }>(
      this.baseUrl, { params: httpParams }
    ).pipe(
      map((response) => response.data)
    );
  }
}

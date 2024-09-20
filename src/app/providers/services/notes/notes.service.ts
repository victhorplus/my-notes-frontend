import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Notes } from '../../../classes/notes.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  baseUrl = 'http://localhost:3000/notes';

  constructor(private httpService: HttpClient) { }

  getNotes(): Observable<Notes[]> {
    return this.httpService.get<{ data: Notes[] }>(this.baseUrl)
    .pipe(
      map((response) => response.data)
    );
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Notes } from '../../../classes/notes.model';
import { INotesParams } from '../../../classes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  baseUrl = 'http://localhost:3000/notes';

  constructor(private httpService: HttpClient) { }

  getNotes(params?: INotesParams): Observable<Notes[]> {
    const httpParams: HttpParams = new HttpParams({fromObject: params as any});

    return this.httpService.get<{ data: Notes[] }>(
      this.baseUrl, { params: httpParams }
    ).pipe(
      map((response) => response.data)
    );
  }
}

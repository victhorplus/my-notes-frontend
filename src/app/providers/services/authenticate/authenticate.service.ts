import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticateModel, RefreshToken } from '../../../classes';
import { Cookie } from '../../helpers/cookie';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  url = "http://localhost:3000";
  // url = "https://my-notes-api-kcza.onrender.com";
  constructor(private http: HttpClient) { }

  get(): Observable<any>{
    return this.http.get(this.url, {
      responseType: 'text'
    });
  }

  authenticate(email: string, password: string): Observable<AuthenticateModel> {
    return this.http.post<AuthenticateModel>(`${this.url}/user/auth`, {
      email, password
    });
  }
}

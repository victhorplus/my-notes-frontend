import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticateModel } from '../../../classes';

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
    return this.http.post<AuthenticateModel>(`${this.url}/authenticate`,
      { email, password },
      { withCredentials: true }
    );
  }

  isLogged(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
}

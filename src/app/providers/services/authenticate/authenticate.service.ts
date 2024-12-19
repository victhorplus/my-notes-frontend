import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticateModel } from '../../../classes';
import { enviroment } from '../../../../enviroments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  url = enviroment.apiUrl;
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

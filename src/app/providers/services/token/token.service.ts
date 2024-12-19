import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { enviroment } from '../../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  baseUrl = `${enviroment.apiUrl}/authenticate/refresh-token`;

  constructor(private httpService: HttpClient) { }

  storeAccessToken(accessToken: string): void {
    localStorage.setItem('token', accessToken)
  }

  getAccessToken(): string | null {
    const accessToken = localStorage.getItem('token');

    return accessToken;
  }

  renewAccessToken(): Observable<{accessToken: string;}> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.httpService.post<any>(this.baseUrl, {}, {
        headers,
        withCredentials: true
      }).pipe(
        tap(response => this.storeAccessToken(response.accessToken))
      );
  }
}

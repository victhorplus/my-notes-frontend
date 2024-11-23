import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, concatMap, Observable, throwError } from 'rxjs';
import { TokenService } from '../../services';
import { Router } from '@angular/router';

export function refreshTokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const tokenService: TokenService = inject(TokenService);
  const router = inject(Router);
  const accessToken = localStorage.getItem('token');
  
  if(!accessToken){ return next(req); }
  req = req.clone({
    headers: req.headers.append('authorization', `Bearer ${accessToken}`),
  });
  
  return next(req).pipe(
    catchError(error => {
      if(error.status !== 401) { 
        return throwError(() => error);
      }

      localStorage.removeItem('token');
      return tokenService.renewAccessToken()
        .pipe(
          catchError((refreshError: HttpErrorResponse) => {
            if(refreshError.status !== 401){ throw refreshError; }

            router.navigate(['login']);
            return throwError(() => refreshError);
          }),
          concatMap((res) => {
            tokenService.storeAccessToken(res.accessToken);
            req = req.clone({
              headers: req.headers.set('authorization', `Bearer ${res.accessToken}`),
            });
            return next(req);
          })
        );
    }));
};



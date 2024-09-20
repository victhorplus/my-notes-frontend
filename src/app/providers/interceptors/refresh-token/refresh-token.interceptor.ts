import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, map, Observable, switchMap } from 'rxjs';
import { TokenService } from '../../services';

export function refreshTokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const tokenService: TokenService = inject(TokenService);

  return next(req).pipe(
    catchError(error => {
      if(error.status !== 401) {
        throw new Error(error);
      }

      return tokenService.renewAccessToken().pipe(
        switchMap((res) => {
          const newRequest = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${res.accessToken}`)
          });
          return next(newRequest);
        })
      );
    })
  );
};

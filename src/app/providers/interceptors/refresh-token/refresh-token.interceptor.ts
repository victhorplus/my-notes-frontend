import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, concatMap, delay, interval, map, mergeMap, Observable, switchMap, throwError } from 'rxjs';
import { TokenService } from '../../services';
import { Router } from '@angular/router';

export function refreshTokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const tokenService: TokenService = inject(TokenService);
  const router = inject(Router);

  const accessToken = tokenService.getAccessToken();
  if(!accessToken){ return next(req); }
  
  req = req.clone({
    headers: req.headers.append('authorization', `Bearer ${accessToken}`),
  });
  
  const renewAccessToken: Observable< {accessToken: string; }> = tokenService.renewAccessToken().pipe(
    catchError((refreshError: HttpErrorResponse) => {
      console.log("Erro no renew", refreshError)
      if(refreshError.status === 401){
        router.navigate(['login']);
      }
      return throwError(() => refreshError); 
    })
  )

  return next(req).pipe(
    catchError(error => {
      debugger
      if(error.status !== 401) { 
        return throwError(() => error); 
      }
      localStorage.removeItem('token');

      return renewAccessToken
      .pipe(
        concatMap((res) => {
          tokenService.storeAccessToken(res.accessToken);
          req = req.clone({
            headers: req.headers.set('authorization', `Bearer ${res.accessToken}`),
          });
          return next(req);
        }),
      );
    })
  )
};


// import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
// import { inject } from '@angular/core';
// import { catchError, concatMap, delay, interval, map, mergeMap, Observable, of, switchMap, throwError } from 'rxjs';
// import { TokenService } from '../../services';
// import { Router } from '@angular/router';

// export function refreshTokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
//   const tokenService: TokenService = inject(TokenService);
//   const router = inject(Router);
  
//   return execute(req, next).pipe(
//     catchError(error => {
//       if(error.status !== 401) { throw error; }

//       return tokenService.renewAccessToken()
//       .pipe(
//         catchError((refreshError: HttpErrorResponse) => {
//           if(refreshError.status !== 401){ throw refreshError; }

//           router.navigate(['login']);
//           return of();
//         })
//       )
//       .pipe(
//         concatMap((res) => {
//           tokenService.storeAccessToken(res.accessToken);
//           return execute(req, next);
//         })
//       );
//     }));
// };

// function execute(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
//   const accessToken = localStorage.getItem('token');
//   if(!accessToken){ return next(req); }
  
//   req = req.clone({
//     headers: req.headers.append('authorization', `Bearer ${accessToken}`),
//   });

//   return next(req);
// }



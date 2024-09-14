import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError } from 'rxjs';
import { TokenService } from '../../services';

export const refreshTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService: TokenService = inject(TokenService);
  return next(req).pipe(
    catchError(error => {
      if(error.status == 401) {
          return tokenService.renewAccessToken();
      }

      throw new Error(error);
    })
);
};

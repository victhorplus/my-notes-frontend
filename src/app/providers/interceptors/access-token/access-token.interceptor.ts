import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../../services';

export function accessTokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  // return next(req);
  const tokenService: TokenService = inject(TokenService);
  const accessToken = tokenService.getAccessToken();
  if(!accessToken){ return next(req); }
  
  const newReq = req.clone({
    headers: req.headers.append('authorization', `Bearer ${accessToken}`),
  });
  
  return next(newReq);
};

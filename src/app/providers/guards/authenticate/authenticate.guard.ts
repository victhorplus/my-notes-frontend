import { CanActivateFn, Router } from '@angular/router';
import { AuthenticateService } from '../../services';
import { inject } from '@angular/core';

export const authenticateGuard: CanActivateFn = (route, state) => {
  const authenticateService: AuthenticateService = inject(AuthenticateService);
  const router = inject(Router);
  
  if(authenticateService.isLogged()){
    return true
  }

  router.navigate(['login']);
  return true;
};

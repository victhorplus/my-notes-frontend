import { CanActivateFn, Router } from '@angular/router';
import { AuthenticateService } from '../../services';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const authenticateService: AuthenticateService = inject(AuthenticateService);
  const router: Router = inject(Router);
  
  if(authenticateService.isLogged()){
    router.navigate(['']);
    return false;
  }
  
  return true;
};

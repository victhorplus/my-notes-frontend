import { Routes } from '@angular/router';
import { authenticateGuard } from '../../providers/guards';

export const AcconteManagerRoutes: Routes = [
    {
        path: 'info',
        loadComponent: () => import('../account-info-page/account-info-page.component').then(m => m.AccountInfoPageComponent),
        canActivate: [authenticateGuard]
    },
    {
        path: '**',
        redirectTo: 'info'
    }
];


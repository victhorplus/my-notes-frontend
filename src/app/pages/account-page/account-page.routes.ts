import { Routes } from '@angular/router';
import { authenticateGuard } from '../../providers/guards';

export const AcconteManagerRoutes: Routes = [
    {
        path: 'info',
        loadComponent: () => import('../account-info-page/account-info-page.component').then(m => m.AccountInfoPageComponent),
        canActivate: [authenticateGuard]
    },
    {
        path: 'change-email',
        loadComponent: () => import('../account-change-email-page').then(m => m.),
        canActivate: [authenticateGuard]
    },
    {
        path: 'change-password',
        loadComponent: () => import('../account-info-page/account-info-page.component').then(m => m.AccountInfoPageComponent),
        canActivate: [authenticateGuard]
    },
    {
        path: 'delete-account',
        loadComponent: () => import('../account-info-page/account-info-page.component').then(m => m.AccountInfoPageComponent),
        canActivate: [authenticateGuard]
    },
    {
        path: '**',
        redirectTo: 'info'
    }
];


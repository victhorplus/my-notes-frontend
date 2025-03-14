import { Routes } from '@angular/router';
import { authenticateGuard } from '../../providers/guards';

export const AccountRoutes: Routes = [
    {
        path: 'info',
        loadComponent: () => import('../account-info-page/account-info-page.component').then(m => m.AccountInfoPageComponent),
        canActivate: [authenticateGuard]
    },
    {
        path: 'change-email',
        loadComponent: () => import('../account-change-email-page/account-change-email-page.component').then(m => m.AccountChangeEmailPageComponent),
        canActivate: [authenticateGuard]
    },
    {
        path: 'change-password',
        loadComponent: () => import('../account-change-password-page/account-change-password-page.component').then(m => m.AccountChangePasswordPageComponent),
        canActivate: [authenticateGuard]
    },
    {
        path: 'delete-account',
        loadComponent: () => import('../account-delete-page/account-delete-page.component').then(m => m.AccountDeletePageComponent),
        canActivate: [authenticateGuard]
    },
    {
        path: '**',
        redirectTo: 'info'
    }
];


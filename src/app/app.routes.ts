import { Routes } from '@angular/router';
import { authenticateGuard, loginGuard } from './providers/guards';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent),
        canActivate: [authenticateGuard]
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login-page/login-page.component').then(m => m.LoginPageComponent),
        canActivate: [loginGuard]
    },
    {
        path: 'account-manager',
        loadComponent: () => import('./pages/account-manager-page/account-manager-page.component').then(m => m.AccountManagerPageComponent),
        loadChildren: () => import('./pages/account-manager-page/account-manager-page.routes').then(m => m.AcconteManagerRoutes),
        canActivate: [authenticateGuard]
    },
    {
        path: '**',
        loadComponent: () => import('./pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent),
        canActivate: [authenticateGuard]
    }
];


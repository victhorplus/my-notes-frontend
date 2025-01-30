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
        path: 'account',
        loadComponent: () => import('./pages/account-page/account-page.component').then(m => m.AccountPageComponent),
        loadChildren: () => import('./pages/account-page/account-page.routes').then(m => m.AccountRoutes),
        canActivate: [authenticateGuard]
    },
    {
        path: '**',
        loadComponent: () => import('./pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent),
        canActivate: [authenticateGuard]
    }
];


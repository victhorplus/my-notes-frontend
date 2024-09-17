import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

import { createActionGroup, props } from  '@ngrx/store';
import { AuthenticateModel } from '../../classes';

export const LoginActions = createActionGroup({
    source: 'Login',
    events: {
        'Store Auth': props<AuthenticateModel>()
    }
})
import { createReducer, on } from '@ngrx/store';
import { AuthenticateModel } from '../../classes';
import { LoginActions } from './login.actions';

const initialState: AuthenticateModel = {
    accessToken: undefined,
    refreshToken: undefined,
    user: undefined
};

export const LoginReducer = createReducer(
    initialState,
    on(LoginActions.storeAuth, onStoreAuth)
)

function onStoreAuth(state: AuthenticateModel, newState: AuthenticateModel): AuthenticateModel{
    console.log("state: ", state);
    console.log("newState: ", newState);

    return {
        ...state,
        ...newState
    };
}
import { createFeatureSelector } from '@ngrx/store';
import { AuthenticateModel } from '../../classes';

export const authenticateSelector = createFeatureSelector<AuthenticateModel>('login');
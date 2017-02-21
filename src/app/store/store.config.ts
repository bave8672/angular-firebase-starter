import { UserEffects } from './user/user.effects';
import { UserReducer } from './user/user.reducer';
import { routerReducer } from '@ngrx/router-store';

export const Reducers = {
    user: UserReducer,
    router: routerReducer
};

export const Effects = [
    UserEffects
];

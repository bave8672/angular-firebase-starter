import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { NavReducer } from './nav/nav.reducer';
import { UserEffects } from './user/user.effects';
import { UserReducer } from './user/user.reducer';
import { routerReducer } from '@ngrx/router-store';
import { localStorageSync } from 'ngrx-store-localstorage';

export const Reducers = compose(
    localStorageSync(['user', 'nav'], true),
    combineReducers
)({
    user: UserReducer,
    router: routerReducer,
    nav: NavReducer
});

export const Effects = [
    UserEffects
];

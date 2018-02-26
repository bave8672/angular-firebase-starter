import { ActionReducer, combineReducers } from '@ngrx/store';
import { UserState } from 'app/store/user/user.state';

import { NavReducer } from './nav/nav.reducer';
import { LogInEffects } from './user/logIn/logIn.effects';
import { logInReducer } from './user/logIn/logIn.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from 'app/store/app.state';

export const combinedReducers: ActionReducerMap<AppState> = {
    user: combineReducers<UserState>({
        logIn: logInReducer,
    }),
    nav: NavReducer,
};

export function effects() {
    return [LogInEffects];
}

import { ActionReducer, combineReducers } from '@ngrx/store';
import { UserState } from 'app/store/user/user.state';

import { NavReducer } from './nav/nav.reducer';
import { LogInEffects } from './user/logIn/logIn.effects';
import { logInReducer } from './user/logIn/logIn.reducer';
import { UpdateEmailEffects } from './user/updateEmail/updateEmail.effects';
import { updateEmailReducer } from './user/updateEmail/updateEmail.reducer';
import { UpdatePasswordEffects } from './user/updatePassword/updatePassword.effects';
import { updatePasswordReducer } from './user/updatePassword/updatePassword.reducer';
import { UpdatePhotoUrlEffects } from './user/updatePhotoUrl/updatePhotoUrl.effects';
import { updatePhotoUrlReducer } from './user/updatePhotoUrl/updatePhotoUrl.reducer';
import { ActionReducerMap } from '@ngrx/store/src/models';
import { AppState } from 'app/store/app.state';

export const combinedReducers: ActionReducerMap<AppState> = {
    user: combineReducers<UserState>({
        logIn: logInReducer,
        updateEmail: updateEmailReducer,
        updatePassword: updatePasswordReducer,
        updatePhotoUrl: updatePhotoUrlReducer,
    }),
    nav: NavReducer,
};

export function effects() {
    return [
        LogInEffects,
        UpdatePhotoUrlEffects,
        UpdatePasswordEffects,
        UpdateEmailEffects,
    ];
}

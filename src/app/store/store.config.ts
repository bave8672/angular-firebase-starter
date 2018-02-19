import { ActionReducer, combineReducers } from '@ngrx/store';
import { UserState } from 'app/store/user/user.state';

import { NavReducer } from './nav/nav.reducer';
import { LogInEffects } from './user/logIn/logIn.effects';
import { LogInReducer } from './user/logIn/logIn.reducer';
import { ResendEmailVerificationEffects } from './user/resendEmailVerification/resendEmailVerification.effects';
import { ResendEmailVerificationReducer } from './user/resendEmailVerification/resendEmailVerification.reducer';
import { SignUpEffects } from './user/signUp/signUp.effects';
import { SignUpReducer } from './user/signUp/signUp.reducer';
import { UpdateEmailEffects } from './user/updateEmail/updateEmail.effects';
import { UpdateEmailReducer } from './user/updateEmail/updateEmail.reducer';
import { UpdatePasswordEffects } from './user/updatePassword/updatePassword.effects';
import { UpdatePasswordReducer } from './user/updatePassword/updatePassword.reducer';
import { UpdatePhotoUrlEffects } from './user/updatePhotoUrl/updatePhotoUrl.effects';
import { UpdatePhotoUrlReducer } from './user/updatePhotoUrl/updatePhotoUrl.reducer';
import { ActionReducerMap } from '@ngrx/store/src/models';
import { AppState } from 'app/store/app.state';

/**
 * Transforms reducers into composable meta-reducers
 */
export function composify<T>(a: ActionReducer<T>) {
    return (b: ActionReducer<T>): ActionReducer<T> => (state, action) =>
        a(b(state, action), action);
}

/**
 * Enforce type safety when combining reducers
 */
export function combineTypedReducers<T>(
    reducers: { readonly [key in keyof T]: ActionReducer<T[key]> }
): ActionReducer<T> {
    return combineReducers(reducers);
}

export const combinedReducers: ActionReducerMap<AppState> = {
    user: combineTypedReducers<UserState>({
        logIn: LogInReducer,
        signUp: SignUpReducer,
        updateEmail: UpdateEmailReducer,
        updatePassword: UpdatePasswordReducer,
        updatePhotoUrl: UpdatePhotoUrlReducer,
        sendEmailVerification: ResendEmailVerificationReducer,
    }),
    nav: NavReducer,
};

export function effects() {
    return [
        LogInEffects,
        SignUpEffects,
        UpdatePhotoUrlEffects,
        UpdatePasswordEffects,
        UpdateEmailEffects,
        ResendEmailVerificationEffects,
    ];
}

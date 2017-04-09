import { AppState, UserState } from './';
import { GlobalReducer } from './global/global.reducer';
import { NavReducer } from './nav/nav.reducer';
import { TodosEffects } from './todos/todos.effects';
import { TodosReducer } from './todos/todos.reducer';
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
import { compose } from '@ngrx/core';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer } from '@ngrx/router-store';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

/**
 * Transforms reducers into composable meta-reducers
 */
export function composify<T>(a: ActionReducer<T>) {
    return (b: ActionReducer<T>): ActionReducer<T> =>
        (state, action) => a(b(state, action), action);
}

/**
 * Enforce type safety when combining reducers
 */
export function combineTypedReducers<T>(
    reducers: {
        [key in keyof T]: ActionReducer<T[key]>
    }): ActionReducer<T> {
    return combineReducers(reducers);
}

const CombinedReducers = compose(
    localStorageSync(['user', 'nav'], true),
    composify(GlobalReducer)
)(
    combineTypedReducers<AppState>({
        user: combineTypedReducers<UserState>({
            logIn: LogInReducer,
            signUp: SignUpReducer,
            updateEmail: UpdateEmailReducer,
            updatePassword: UpdatePasswordReducer,
            updatePhotoUrl: UpdatePhotoUrlReducer,
            sendEmailVerification: ResendEmailVerificationReducer
        }),
        router: routerReducer,
        nav: NavReducer,
        todos: TodosReducer
    })
);

/**
 * Export global reducer as a function for AOT
 */
export function Reducer(state, action) {
    return CombinedReducers(state, action);
}

export function RunEffects() {
    return [
        EffectsModule.run(LogInEffects),
        EffectsModule.run(SignUpEffects),
        EffectsModule.run(UpdatePhotoUrlEffects),
        EffectsModule.run(UpdatePasswordEffects),
        EffectsModule.run(UpdateEmailEffects),
        EffectsModule.run(ResendEmailVerificationEffects),
        EffectsModule.run(TodosEffects)
    ];
}

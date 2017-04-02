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
export function composify(a: ActionReducer<any>) {
    return (b: ActionReducer<any>): ActionReducer<any> =>
        (state, action) => a(b(state, action), action);
}

const CombinedReducers = compose(
    localStorageSync(['user', 'nav'], true),
    composify(GlobalReducer),
    combineReducers
)({
    user: combineReducers({
        logIn: LogInReducer,
        signUp: SignUpReducer,
        updatePassword: UpdatePasswordReducer,
        updatePhotoUrl: UpdatePhotoUrlReducer,
        sendEmailVerification: ResendEmailVerificationReducer
    }),
    router: routerReducer,
    nav: NavReducer,
    todos: TodosReducer
});

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

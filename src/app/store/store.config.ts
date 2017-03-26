import { FormState } from './';
import { AppState } from './app-state';
import { GlobalReducer } from './global/global.reducer';
import { NavReducer } from './nav/nav.reducer';
import { TodosReducer } from './todos/todos.reducer';
import { UserState } from './user';
import { LogInReducer } from './user/logIn/logIn.reducer';
import { SignUpReducer } from './user/signUp/signUp.reducer';
import { UserReducer } from './user/user.reducer';
import { routerReducer } from '@ngrx/router-store';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { compose } from '@ngrx/core';

/**
 * 
 */
export function meta(a: ActionReducer<any>) {
    return (b: ActionReducer<any>): ActionReducer<any> => (state, action) => a(b(state, action), action);
}

// export function compose(...fns: Function[]) {
//     return fns.reduce((p, n) => (...args: any[]) => n(p(args)));
// }

const Reducers = compose(
    localStorageSync(['user', 'nav'], true),
    meta(GlobalReducer),
    combineReducers
)({
    user: compose(
        meta(UserReducer),
        combineReducers
        )({
            logIn: LogInReducer,
            signUp: SignUpReducer
        }),
    router: routerReducer,
    nav: NavReducer,
    todos: TodosReducer
});

export function Reducer(state, action) {
    return Reducers(state, action);
}

export const formState: FormState = {
    showForm: false,
    isRequesting: false,
    successMessage: '',
    failureMessage: ''
};

export const userState: UserState = {
    logIn: formState,
    signUp: formState,
    updatePhotoUrl: formState,
    updatePassword: formState,
    updateEmail: formState,
    sendEmailVerification: formState,
};

export const InitialState: AppState = {
    user: userState,
    router: { path: '/' },
    nav: { showNavigation: false },
    todos: { editing: '' }
};

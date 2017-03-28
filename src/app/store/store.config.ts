import { GlobalReducer } from './global/global.reducer';
import { NavReducer } from './nav/nav.reducer';
import { TodosReducer } from './todos/todos.reducer';
import { LogInReducer } from './user/logIn/logIn.reducer';
import { SignUpReducer } from './user/signUp/signUp.reducer';
import { UserReducer } from './user/user.reducer';
import { compose } from '@ngrx/core';
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
    user: compose(
        composify(UserReducer),
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
    return CombinedReducers(state, action);
}

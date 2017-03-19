import { SignUpReducer } from './user/signUp/signUp.reducer';
import { LogInReducer } from './user/logIn/logIn.reducer';
import { GlobalReducer } from './global/global.reducer';
import { NavReducer } from './nav/nav.reducer';
import { TodosEffects } from './todos/todos.effects';
import { TodosReducer } from './todos/todos.reducer';
import { UserEffects } from './user/user.effects';
import { UserReducer } from './user/user.reducer';
import { compose } from '@ngrx/core/compose';
import { routerReducer } from '@ngrx/router-store';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export const combine = (a: ActionReducer<any>) => (b: ActionReducer<any>): ActionReducer<any> =>
        (state, action) => a(b(state, action), action);

export const Reducers = compose(
    localStorageSync(['user', 'nav'], true),
    combine(GlobalReducer),
    combineReducers
)({
    user: compose(
        combine(UserReducer),
        combineReducers
        )({
            logIn: LogInReducer,
            signUp: SignUpReducer
        }),
    router: routerReducer,
    nav: NavReducer,
    todos: TodosReducer
});

export const Effects = [
    UserEffects,
    TodosEffects
];

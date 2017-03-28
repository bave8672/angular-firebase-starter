import {
    DefaultNavState,
    DefaultRouterState,
    DefaultTodosState,
    DefaultUserState,
    NavState,
    TodosState,
    UserState
} from './';
import { RouterState } from '@ngrx/router-store';

export interface AppState {
    user: UserState;
    router: RouterState;
    nav: NavState;
    todos: TodosState;
}

export const DefaultAppState: AppState = {
    user: DefaultUserState,
    router: DefaultRouterState,
    nav: DefaultNavState,
    todos: DefaultTodosState,
};

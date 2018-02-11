import { DefaultNavState, DefaultTodosState, DefaultUserState, NavState, TodosState, UserState } from './';

export interface AppState {
    user: UserState;
    nav: NavState;
    todos: TodosState;
}

export const DefaultAppState: AppState = {
    user: DefaultUserState,
    nav: DefaultNavState,
    todos: DefaultTodosState,
};

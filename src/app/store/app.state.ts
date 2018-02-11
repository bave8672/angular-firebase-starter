import { DefaultNavState, NavState } from 'app/store/nav/nav.state';
import { DefaultTodosState, TodosState } from 'app/store/todos/todos.state';
import { DefaultUserState, UserState } from 'app/store/user/user.state';

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

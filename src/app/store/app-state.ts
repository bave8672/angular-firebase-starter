import { TodosState } from './todos/todos.state';
import { NavState } from './nav/navState';
import { RouterState } from '@ngrx/router-store';
import { UserState } from './user/user.state';

export class AppState {
    user = new UserState();
    router: RouterState;
    nav = new NavState();
    todos = new TodosState();
}

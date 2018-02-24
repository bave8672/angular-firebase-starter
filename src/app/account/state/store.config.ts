import { ActionReducerMap } from '@ngrx/store';
import { AppState } from 'app/store/app.state';
import { AppFeatureState } from 'app/store/utils/featureState';
import {
    TodosState,
    initialTodosState,
} from 'app/account/todos/state/todos.state';
import { todosReducer } from 'app/account/todos/state/todos.reducer';

export const ACCOUNT_FEATURE_KEY = 'account';

export interface AccountFeatureState {
    todos: TodosState;
}

export type AccountAppState = AppFeatureState<
    AppState,
    typeof ACCOUNT_FEATURE_KEY,
    AccountFeatureState
>;

export const accountReducers: ActionReducerMap<AccountFeatureState> = {
    todos: todosReducer,
};

export const initialAccountState: AccountFeatureState = {
    todos: initialTodosState,
};

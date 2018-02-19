import { ActionReducerMap } from '@ngrx/store';
import { TodosState } from 'app/account/state/todos/todos.state';
import { AppState } from 'app/store/app.state';
import { todosReducer } from 'app/account/state/todos/todos.reducer';
import { AppFeatureState } from 'app/store/utils/featureState';

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

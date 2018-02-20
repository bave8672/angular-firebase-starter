import { ActionReducerMap } from '@ngrx/store';
import {
    TodosState,
    initialTodosState,
} from 'app/account/state/todos/todos.state';
import { AppState } from 'app/store/app.state';
import { todosReducer } from 'app/account/state/todos/todos.reducer';
import { AppFeatureState } from 'app/store/utils/featureState';
import { ResendEmailVerificationFeatureState } from 'app/account/send-email-verification/state/resendEmailVerifiacationState';
import { resendEmailVerificationReducer } from 'app/account/send-email-verification/state/resendEmailVerification.reducer';
import { initialResendVerificationEmailState } from 'app/account/send-email-verification/state/initialState';

export const ACCOUNT_FEATURE_KEY = 'account';

export interface AccountFeatureState {
    todos: TodosState;
    resendEmailVerification: ResendEmailVerificationFeatureState;
}

export type AccountAppState = AppFeatureState<
    AppState,
    typeof ACCOUNT_FEATURE_KEY,
    AccountFeatureState
>;

export const accountReducers: ActionReducerMap<AccountFeatureState> = {
    todos: todosReducer,
    resendEmailVerification: resendEmailVerificationReducer,
};

export const initialAccountState: AccountFeatureState = {
    todos: initialTodosState,
    resendEmailVerification: initialResendVerificationEmailState,
};

import { FormState } from 'app/store/forms/formState';
import { AppFeatureState } from 'app/store/utils/featureState';
import { AppState } from 'app/store/app.state';
import { ActionReducerMap } from '@ngrx/store/src/models';
import { resetPasswordFormReducer } from 'app/reset-password/state/form/resetPasswordForm.reducer';

export const RESET_PASSWORD_STORE_KEY = 'resetPassword';

export interface ResetPasswordFeatureState {
    form: FormState;
}

export type ResetPasswordAppState = AppFeatureState<
    AppState,
    typeof RESET_PASSWORD_STORE_KEY,
    ResetPasswordFeatureState
>;

export const resetPasswordReducers: ActionReducerMap<
    ResetPasswordFeatureState
> = {
    form: resetPasswordFormReducer,
};

import { formReducer } from 'app/store/forms/form.reducer.factory';
import { ResetPasswordFormActionTypes } from './resetPasswordForm.actionTypes';
import { FormState } from 'app/store/forms/formState';
import { Action } from '@ngrx/store';

export function resetPasswordFormReducer(
    state: FormState,
    action: Action
): FormState {
    return formReducer({
        request: ResetPasswordFormActionTypes.Reset,
        failure: ResetPasswordFormActionTypes.Failure,
        success: ResetPasswordFormActionTypes.Success,
    })(state, action);
}

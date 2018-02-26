import { formReducer } from 'app/store/forms/form.reducer.factory';

import { UpdatePasswordActionTypes } from './updatePassword.actionTypes';
import { Messages } from 'app/resources/messages';
import { FormState } from 'app/store/forms/formState';
import { Action } from '@ngrx/store';

export function updatePasswordReducer(
    state: FormState,
    action: Action
): FormState {
    return formReducer({
        toggle: UpdatePasswordActionTypes.ToggleForm,
        request: UpdatePasswordActionTypes.Update,
        failure: UpdatePasswordActionTypes.Failure,
        success: UpdatePasswordActionTypes.Success,
        successMessage: Messages.ApiResponse.UpdatePasswordSuccess,
        failureMessage: Messages.ApiResponse.ServerError,
    })(state, action);
}

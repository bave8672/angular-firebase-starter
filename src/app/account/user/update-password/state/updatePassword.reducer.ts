import { formReducer } from 'app/store/forms/form.reducer.factory';

import { UpdatePasswordActionTypes } from './updatePassword.actionTypes';
import { Messages } from 'app/resources/messages';

export const updatePasswordReducer = formReducer({
    toggle: UpdatePasswordActionTypes.ToggleForm,
    request: UpdatePasswordActionTypes.Update,
    failure: UpdatePasswordActionTypes.Failure,
    success: UpdatePasswordActionTypes.Success,
    successMessage: Messages.ApiResponse.UpdatePasswordSuccess,
    failureMessage: Messages.ApiResponse.ServerError,
});

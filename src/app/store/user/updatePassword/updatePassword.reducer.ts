import { FormReducer } from '../../';
import { UpdatePasswordActionTypes } from './updatePassword.actionTypes';
import { Messages } from '../../../resources/messages';

export const UpdatePasswordReducer = FormReducer({
    toggle: UpdatePasswordActionTypes.ToggleForm,
    request: UpdatePasswordActionTypes.Update,
    failure: UpdatePasswordActionTypes.Failure,
    success: UpdatePasswordActionTypes.Success,
    successMessage: Messages.ApiResponse.UpdatePasswordSuccess,
    failureMessage: Messages.ApiResponse.ServerError
});

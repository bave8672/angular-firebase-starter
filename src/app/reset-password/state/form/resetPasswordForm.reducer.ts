import { formReducer } from "app/store/forms/form.reducer.factory";
import { ResetPasswordFormActionTypes } from './resetPasswordForm.actionTypes';

export const resetPasswordFormReducer = formReducer({
    request: ResetPasswordFormActionTypes.Reset,
    failure: ResetPasswordFormActionTypes.Failure,
    success: ResetPasswordFormActionTypes.Success,
});

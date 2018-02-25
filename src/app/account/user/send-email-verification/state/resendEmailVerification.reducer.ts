import { ResendEmailVerificationActionTypes } from './resendEmailVerification.actionTypes';
import { formReducer } from 'app/store/forms/form.reducer.factory';
import { Messages } from 'app/resources/messages';

export const resendEmailVerificationReducer = formReducer({
    request: ResendEmailVerificationActionTypes.Resend,
    failure: ResendEmailVerificationActionTypes.Failure,
    success: ResendEmailVerificationActionTypes.Success,
    successMessage: Messages.ApiResponse.SendVerificationEmailSuccess,
});

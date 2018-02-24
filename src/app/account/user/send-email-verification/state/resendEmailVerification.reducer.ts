import { ResendEmailVerificationActionTypes } from './resendEmailVerification.actionTypes';
import { Messages } from '../../../resources/messages';
import { formReducer } from 'app/store/forms/form.reducer.factory';

export const resendEmailVerificationReducer = formReducer({
    request: ResendEmailVerificationActionTypes.Resend,
    failure: ResendEmailVerificationActionTypes.Failure,
    success: ResendEmailVerificationActionTypes.Success,
    successMessage: Messages.ApiResponse.SendVerificationEmailSuccess,
});

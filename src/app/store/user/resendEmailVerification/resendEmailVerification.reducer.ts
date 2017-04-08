import { ResendEmailVerificationActionTypes } from './resendEmailVerification.actionTypes';
import { Messages } from '../../../resources/messages';
import { FormReducer } from '../../forms';

export const ResendEmailVerificationReducer = FormReducer({
    request: ResendEmailVerificationActionTypes.Resend,
    failure: ResendEmailVerificationActionTypes.Failure,
    success: ResendEmailVerificationActionTypes.Success,
    successMessage: Messages.ApiResponse.SendVerificationEmailSuccess
});

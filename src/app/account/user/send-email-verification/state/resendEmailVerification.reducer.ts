import { ResendEmailVerificationActionTypes } from './resendEmailVerification.actionTypes';
import { formReducer } from 'app/store/forms/form.reducer.factory';
import { Messages } from 'app/resources/messages';
import { FormState } from 'app/store/forms/formState';
import { ResendEmailVerificationActions } from 'app/account/user/send-email-verification/state/resendEmailVerification.actions';
import { Action } from '@ngrx/store';

export function resendEmailVerificationReducer(state: FormState,  action: Action) {
    return formReducer({
        request: ResendEmailVerificationActionTypes.Resend,
        failure: ResendEmailVerificationActionTypes.Failure,
        success: ResendEmailVerificationActionTypes.Success,
        successMessage: Messages.ApiResponse.SendVerificationEmailSuccess,
    })(state, action);
}

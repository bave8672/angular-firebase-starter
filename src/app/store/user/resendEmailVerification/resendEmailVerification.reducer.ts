import { Messages } from '../../../resources/messages';
import { getErrorMessage } from '../../../helpers/getErrorMessage';
import { FormState, FormStates, ResendEmailVerificationActionTypes } from '../..';
import { assign } from '../../../helpers';
import { ActionReducer } from '@ngrx/store';

export const ResendEmailVerificationReducer: ActionReducer<FormState> = (state = FormStates.Default, action) => {

    switch (action.type) {

        case ResendEmailVerificationActionTypes.Resend: {
            return assign(state, FormStates.Requesting);
        }

        case ResendEmailVerificationActionTypes.Failure: {
            return assign(state, FormStates.Failure(getErrorMessage(action.payload)));
        }

        case ResendEmailVerificationActionTypes.Success: {
            return assign(state, FormStates.Success(Messages.ApiResponse.SendVerificationEmailSuccess));
        }
    }

    return state;
};

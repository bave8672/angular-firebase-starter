import { ResendEmailVerificationActions } from 'app/store/user/resendEmailVerification/resendEmailVerification.actions';

import { assignDeep } from '../../../helpers';
import { Messages } from '../../../resources/messages';
import { shouldNotAlterStateOnUnknownAction } from '../../testing';
import { ResendEmailVerificationReducer } from './resendEmailVerification.reducer';
import { FormState, FormStates } from 'app/store/forms/formState';

describe('Resend Email Verification Reducer', () => {
    shouldNotAlterStateOnUnknownAction(ResendEmailVerificationReducer);

    let oldState: FormState;

    beforeEach(() => {
        oldState = assignDeep(FormStates.Default);
    });

    it('Should display the requesting status when Resend is called', () => {
        const newState = ResendEmailVerificationReducer(
            oldState,
            new ResendEmailVerificationActions.Resend()
        );
        expect(newState).toEqual(FormStates.Requesting);
    });

    it('Should display the success state when Success is called', () => {
        const newState = ResendEmailVerificationReducer(
            oldState,
            new ResendEmailVerificationActions.Success({})
        );
        expect(newState).toEqual(
            FormStates.Success(
                Messages.ApiResponse.SendVerificationEmailSuccess
            )
        );
    });

    it('Should display the success state when Success is called', () => {
        const newState = ResendEmailVerificationReducer(
            oldState,
            new ResendEmailVerificationActions.Failure({})
        );
        expect(newState).toEqual(
            FormStates.Failure(Messages.ApiResponse.ServerError)
        );
    });
});

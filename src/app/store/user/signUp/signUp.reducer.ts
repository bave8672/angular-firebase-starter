import { SignUpActionTypes } from './signUp.actionTypes';
import { ActionReducer } from '@ngrx/store';
import { FormState, FormStates } from '../../formState';
import { assign, getErrorMessage } from '../../../helpers';

export const SignUpReducer: ActionReducer<FormState> = (state, action) => {

    switch (action.type) {

        case SignUpActionTypes.SignUp: {
            return assign(state, FormStates.Requesting);
        }

        case SignUpActionTypes.Failure: {
            return assign(state, FormStates.Failure(getErrorMessage(action.payload)));
        }
    }

    return state;
};

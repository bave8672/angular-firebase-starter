import { FormState, FormStates } from '../..';
import { UpdateEmailActionTypes } from './updateEmail.actionTypes';
import { assign } from '../../../helpers/assign';
import { getErrorMessage } from '../../../helpers/getErrorMessage';
import { Messages } from '../../../resources/messages';
import { ActionReducer } from '@ngrx/store';

export const UpdateEmailReducer: ActionReducer<FormState> = (state = FormStates.Default, action) => {

    switch (action.type) {

        case UpdateEmailActionTypes.ToggleForm: {
            const newState = assign(state, {
                showForm: !state.showForm
            });
            return newState;
        }

        case UpdateEmailActionTypes.Update: {
            return assign(state, FormStates.Requesting);
        }

        case UpdateEmailActionTypes.Failure: {
            return assign(state, FormStates.Failure(getErrorMessage(action.payload)));
        }

        case UpdateEmailActionTypes.Success: {
            return assign(state, FormStates.Success(Messages.ApiResponse.UpdateEmailSuccess));
        }
    }

    return state;
};

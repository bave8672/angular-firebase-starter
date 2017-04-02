import { Messages } from '../../../resources/messages';
import { getErrorMessage } from '../../../helpers/getErrorMessage';
import { assign } from '../../../helpers';
import { FormState, FormStates } from '../../formState';
import { ActionReducer } from '@ngrx/store';
import { UpdatePasswordActionTypes } from '../../';

export const UpdatePasswordReducer: ActionReducer<FormState> = (state = FormStates.Default, action) =>  {

    switch (action.type) {

        case UpdatePasswordActionTypes.ToggleForm: {
            return assign(state, { showForm: !state.showForm });
        }

        case UpdatePasswordActionTypes.Update: {
            return assign(state, FormStates.Requesting);
        }

        case UpdatePasswordActionTypes.Failure: {
            return assign(state, FormStates.Failure(getErrorMessage(action.payload)));
        }

        case UpdatePasswordActionTypes.Success: {
            return assign(state, FormStates.Success(Messages.ApiResponse.UpdatePasswordSuccess));
        }
    }

    return state;
};

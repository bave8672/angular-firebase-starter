import { Messages } from '../../../resources/messages';
import { getErrorMessage } from '../../../helpers/getErrorMessage';
import { FormState, FormStates, UpdatePhotoUrlActionTypes } from '../..';
import { ActionReducer } from '@ngrx/store';
import { assign } from '../../../helpers';

export const UpdatePhotoUrlReducer: ActionReducer<FormState> = (state = FormStates.Default, action) => {

    switch (action.type) {

        case UpdatePhotoUrlActionTypes.ToggleForm: {
            return assign(state, { showForm: !state.showForm });
        }

        case UpdatePhotoUrlActionTypes.Update: {
            return assign(state, FormStates.Requesting); 
        }

        case UpdatePhotoUrlActionTypes.Failure: {
            return assign(state, FormStates.Failure(getErrorMessage(action.payload))); 
        }

        case UpdatePhotoUrlActionTypes.Success: {
            return assign(state, FormStates.Success(Messages.ApiResponse.UpdatePhotoUrlSucess));
        }
    }

    return state;
};

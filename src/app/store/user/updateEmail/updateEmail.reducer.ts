import { formReducer } from 'app/store/forms/form.reducer.factory';

import { Messages } from '../../../resources/messages';
import { UpdateEmailActionTypes } from './updateEmail.actionTypes';

export const UpdateEmailReducer = formReducer({
    toggle: UpdateEmailActionTypes.ToggleForm,
    request: UpdateEmailActionTypes.Update,
    success: UpdateEmailActionTypes.Success,
    failure: UpdateEmailActionTypes.Failure,
    successMessage: Messages.ApiResponse.UpdateEmailSuccess,
});

import { formReducer } from 'app/store/forms/form.reducer.factory';

import { Messages } from '../../../resources/messages';
import { UpdatePhotoUrlActionTypes } from './updatePhotoUrl.actionTypes';

export const updatePhotoUrlReducer = formReducer({
    toggle: UpdatePhotoUrlActionTypes.ToggleForm,
    request: UpdatePhotoUrlActionTypes.Update,
    failure: UpdatePhotoUrlActionTypes.Failure,
    success: UpdatePhotoUrlActionTypes.Success,
    successMessage: Messages.ApiResponse.UpdatePhotoUrlSucess,
});

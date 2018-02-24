import { formReducer } from 'app/store/forms/form.reducer.factory';
import { UpdatePhotoUrlActionTypes } from './updatePhotoUrl.actionTypes';
import { Messages } from 'app/resources/messages';

export const updatePhotoUrlReducer = formReducer({
    toggle: UpdatePhotoUrlActionTypes.ToggleForm,
    request: UpdatePhotoUrlActionTypes.Update,
    failure: UpdatePhotoUrlActionTypes.Failure,
    success: UpdatePhotoUrlActionTypes.Success,
    successMessage: Messages.ApiResponse.UpdatePhotoUrlSucess,
});

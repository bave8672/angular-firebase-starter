import { Messages } from '../../../resources/messages';
import { FormReducer } from '../../forms';
import { UpdatePhotoUrlActionTypes } from './updatePhotoUrl.actionTypes';

export const UpdatePhotoUrlReducer = FormReducer({
    toggle: UpdatePhotoUrlActionTypes.ToggleForm,
    request: UpdatePhotoUrlActionTypes.Update,
    failure: UpdatePhotoUrlActionTypes.Failure,
    success: UpdatePhotoUrlActionTypes.Success,
    successMessage: Messages.ApiResponse.UpdatePhotoUrlSucess
});

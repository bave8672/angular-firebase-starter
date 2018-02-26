import { formReducer } from 'app/store/forms/form.reducer.factory';
import { UpdatePhotoUrlActionTypes } from './updatePhotoUrl.actionTypes';
import { Messages } from 'app/resources/messages';
import { FormState } from 'app/store/forms/formState';
import { Action } from '@ngrx/store';

export function updatePhotoUrlReducer(
    state: FormState,
    action: Action
): FormState {
    return formReducer({
        toggle: UpdatePhotoUrlActionTypes.ToggleForm,
        request: UpdatePhotoUrlActionTypes.Update,
        failure: UpdatePhotoUrlActionTypes.Failure,
        success: UpdatePhotoUrlActionTypes.Success,
        successMessage: Messages.ApiResponse.UpdatePhotoUrlSucess,
    })(state, action);
}

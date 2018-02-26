import { formReducer } from 'app/store/forms/form.reducer.factory';
import { UpdateEmailActionTypes } from 'app/account/user/update-email/state/updateEmail.actionTypes';
import { Messages } from 'app/resources/messages';
import { FormState } from 'app/store/forms/formState';
import { Action } from '@ngrx/store';

export function updateEmailReducer(state: FormState, action: Action) {
    return formReducer({
        toggle: UpdateEmailActionTypes.ToggleForm,
        request: UpdateEmailActionTypes.Update,
        success: UpdateEmailActionTypes.Success,
        failure: UpdateEmailActionTypes.Failure,
        successMessage: Messages.ApiResponse.UpdateEmailSuccess,
    })(state, action);
}

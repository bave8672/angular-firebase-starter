import { formReducer } from 'app/store/forms/form.reducer.factory';
import { UpdateEmailActionTypes } from 'app/account/user/update-email/state/updateEmail.actionTypes';
import { Messages } from 'app/resources/messages';

export const updateEmailReducer = formReducer({
    toggle: UpdateEmailActionTypes.ToggleForm,
    request: UpdateEmailActionTypes.Update,
    success: UpdateEmailActionTypes.Success,
    failure: UpdateEmailActionTypes.Failure,
    successMessage: Messages.ApiResponse.UpdateEmailSuccess,
});

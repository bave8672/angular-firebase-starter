import { formReducer } from 'app/store/forms/form.reducer.factory';
import { LogInActionTypes } from 'app/store/user/logIn/logIn.actionTypes';
import { FormState } from 'app/store/forms/formState';
import { LogInActions } from 'app/store/user/logIn/logIn.actions';

export function logInReducer(
    state: FormState,
    action: LogInActions.LogInAction
): FormState {
    return formReducer({
        show: LogInActionTypes.ShowModal,
        hide: LogInActionTypes.HideModal,
        request: LogInActionTypes.LogIn,
        success: LogInActionTypes.Success,
        failure: LogInActionTypes.Failure,
    })(state, action);
};

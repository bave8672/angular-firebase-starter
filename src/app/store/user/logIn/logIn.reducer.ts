import { formReducer } from 'app/store/forms/form.reducer.factory';
import { LogInActionTypes } from 'app/store/user/logIn/logIn.actionTypes';

export const logInReducer = formReducer({
    show: LogInActionTypes.ShowModal,
    hide: LogInActionTypes.HideModal,
    request: LogInActionTypes.LogIn,
    success: LogInActionTypes.Success,
    failure: LogInActionTypes.Failure,
});

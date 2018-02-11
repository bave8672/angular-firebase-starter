import { FormReducer } from 'app/store/forms/form.reducer.factory';
import { LogInActionTypes } from 'app/store/user/logIn/logIn.actionTypes';

export const LogInReducer = FormReducer({
    show: LogInActionTypes.ShowModal,
    hide: LogInActionTypes.HideModal,
    request: LogInActionTypes.LogIn,
    success: LogInActionTypes.Success,
    failure: LogInActionTypes.Failure,
});

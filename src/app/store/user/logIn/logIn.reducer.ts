import { LogInActionTypes } from 'app/store/user';

import { FormReducer } from '../../';

export const LogInReducer = FormReducer({
    show: LogInActionTypes.ShowModal,
    hide: LogInActionTypes.HideModal,
    request: LogInActionTypes.LogIn,
    success: LogInActionTypes.Success,
    failure: LogInActionTypes.Failure,
});

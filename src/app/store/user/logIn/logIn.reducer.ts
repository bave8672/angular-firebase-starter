import { assign, getErrorMessage } from '../../../helpers';
import { FormState, FormStates, FormReducer } from '../../';
import { LogInActionTypes } from './logIn.actionTypes';
import { routerActions } from '@ngrx/router-store';
import { ActionReducer } from '@ngrx/store';

export const LogInReducer = FormReducer({
    show: LogInActionTypes.ShowModal,
    hide: LogInActionTypes.HideModal,
    request: LogInActionTypes.LogIn,
    success: LogInActionTypes.Success,
    failure: LogInActionTypes.Failure,
    extras: [{
        types: [
            routerActions.UPDATE_LOCATION,
            routerActions.GO
        ],
        func: (state: FormState, _) => {
            if (state.showForm) {
                return assign(state, { showForm: false });
            }
            return state;
        }
    }]
});

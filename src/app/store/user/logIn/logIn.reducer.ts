import { assign } from '../../../helpers';
import { FormState, FormStates } from '../../formState';
import { LogInActionTypes } from './logIn.actionTypes';
import { routerActions } from '@ngrx/router-store';
import { ActionReducer } from '@ngrx/store';

export const LogInReducer: ActionReducer<FormState> = (state = new FormState(), action) => {

    switch (action.type) {

        case routerActions.UPDATE_LOCATION: {
            if (state.showForm) {
                return assign(state, { showForm: false });
            }
            return state;
        }

        case LogInActionTypes.ShowModal: {
            return assign(state, { showForm: true });
        }

        case LogInActionTypes.HideModal: {
            return assign(state, { showForm: false });
        }

        case LogInActionTypes.LogIn: {
            return assign(state, FormStates.Requesting);
        }

        case LogInActionTypes.Failure: {
            return assign(state, FormStates.Failure(''));
        }

        case LogInActionTypes.Success: {
            return assign(state, new FormState());
        }
    }

    return state;
};

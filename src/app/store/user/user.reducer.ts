import { getErrorMessage } from '../../helpers/getErrorMessage';
import { Messages } from '../../resources/messages';
import { assign } from '../../helpers/assign';
import { UserActionTypes } from './user.actionTypes';
import { UserActions } from './user.actions';
import { UserState } from './user.state';
import { Reducer } from '../reducer';

export const UserReducer: Reducer<UserState, UserActions.UserAction> = (state = new UserState(), action = { type: '', payload: '' }) => {

    switch (action.type) {

        case '[Router] Update Location': { // TODO: what is this event?
            if (state.showLogInModal) {
                return assign(state, { showLogInModal: false });
            }
            return state;
        }

        case UserActionTypes.ShowLogInModal: {
            return assign(state, { showLogInModal: true });
        }

        case UserActionTypes.HideLogInModal: {
            return assign(state, { showLogInModal: false });
        }

        case UserActionTypes.LogIn: {
            return assign(state, { isRequestingLogIn: true });
        }

        case UserActionTypes.LogInFailure: {
            return assign(state, { logInFailure: true, isLoggedIn: false, isRequestingLogIn: false });
        }

        case UserActionTypes.LogInSuccess: {
            return assign(state, {
                logInFailure: false,
                isLoggedIn: true,
                firebaseUid: action.payload.uid,
                showLogInModal: false,
                isRequestingLogIn: false
            });
        }

        case UserActionTypes.LogOut: {
            return assign(state, { isLoggedIn: false, firebaseUid: '', isRequestingLogIn: false });
        }

        case UserActionTypes.ShowUpdatePasswordForm: {
            if (!state.showUpdatePasswordForm) {
                return assign(state, {
                    passwordUpdateSuccessMessage: '',
                    passwordUpdateFailureMessage: '',
                    showUpdatePasswordForm: true
                });
            }
            return state;
        }

        case UserActionTypes.HideUpdatePasswordForm: {
            if (state.showUpdatePasswordForm) {
                return assign(state, { showUpdatePasswordForm: false });
            }
            return state;
        }

        case UserActionTypes.ToggleUpdatePasswordForm: {
            return assign(state, {
                passwordUpdateSuccessMessage: '',
                passwordUpdateFailureMessage: '',
                showUpdatePasswordForm: !state.showUpdatePasswordForm
            });
        }

        case UserActionTypes.UpdatePassword: {
            return assign(state, { isRequestingPasswordUpdate: true });
        }

        case UserActionTypes.UpdatePasswordFailure: {
            return assign(state, {
                isRequestingPasswordUpdate: false,
                passwordUpdateSuccessMessage: '',
                passwordUpdateFailureMessage: getErrorMessage(action.payload)
            });
        }

        case UserActionTypes.UpdatePasswordSuccess: {
            return assign(state, {
                isRequestingPasswordUpdate: false,
                passwordUpdateFailureMessage: '',
                passwordUpdateSuccessMessage: Messages.ApiResponse.UpdatePasswordSuccess
            });
        }
    }

    return state;
};

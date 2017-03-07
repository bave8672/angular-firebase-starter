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

        case UserActionTypes.ToggleUpdatePasswordForm: {
            return assign(state, { updatePassword: {
                successMessage: '',
                failureMessage: '',
                showForm: !state.updatePassword.showForm
            } });
        }

        case UserActionTypes.UpdatePassword: {
            return assign(state, { updatePassword: { isRequesting: true } });
        }

        case UserActionTypes.UpdatePasswordFailure: {
            return assign(state, { updatePassword: {
                isRequesting: false,
                successMessage: '',
                failureMessage: getErrorMessage(action.payload)
            } });
        }

        case UserActionTypes.UpdatePasswordSuccess: {
            return assign(state, { updatePassword: {
                isRequesting: false,
                failureMessage: '',
                successMessage: Messages.ApiResponse.UpdatePasswordSuccess
            } });
        }

        case UserActionTypes.ToggleUpdateEmailForm: {
            return assign(state, { updateEmail: {
                successMessage: '',
                failureMessage: '',
                showForm: !state.updateEmail.showForm
            } });
        }

        case UserActionTypes.UpdateEmail: {
            return assign(state, { updateEmail: {
                isRequesting: true
            }});
        }

        case UserActionTypes.UpdateEmailFailure: {
            return assign(state, { updateEmail: {
                isRequesting: false,
                successMessage: '',
                failureMessage: getErrorMessage(action.payload)
            } });
        }

        case UserActionTypes.UpdateEmailSuccess: {
            return assign(state, { updateEmail: {
                isRequesting: false,
                failureMessage: '',
                successMessage: Messages.ApiResponse.UpdateEmailSuccess
            } });
        }

        case UserActionTypes.ToggleUpdatePhotoUrl: {
            return assign(state, { updatePhotoUrl: {
                successMessage: '',
                failureMessage: '',
                showForm: !state.updatePhotoUrl.showForm
            } });
        }

        case UserActionTypes.UpdatePhotoUrl: {
            return assign(state, { updatePhotoUrl: {
                isRequesting: true
            }});
        }

        case UserActionTypes.UpdatePhotoUrlFailure: {
            return assign(state, { updatePhotoUrl: {
                isRequesting: false,
                successMessage: '',
                failureMessage: getErrorMessage(action.payload)
            } });
        }

        case UserActionTypes.UpdatePhotoUrlSuccess: {
            return assign(state, { updatePhotoUrl: {
                isRequesting: false,
                failureMessage: '',
                successMessage: ''
            } });
        }
    }

    return state;
};

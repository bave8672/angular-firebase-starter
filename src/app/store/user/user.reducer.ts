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
            const newState = assign(state, { updatePassword: {
                successMessage: '',
                failureMessage: '',
                showForm: !state.updatePassword.showForm
            } });
            if (newState.updatePassword.showForm) {
                newState.updateEmail.showForm = false;
                newState.updatePhotoUrl.showForm = false;
            }
            return newState;
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
            const newState = assign(state, { updateEmail: {
                successMessage: '',
                failureMessage: '',
                showForm: !state.updateEmail.showForm
            } });
            if (newState.updateEmail.showForm) {
                newState.updatePassword.showForm = false;
                newState.updatePhotoUrl.showForm = false;
            }
            return newState;
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
            const newState = assign(state, { updatePhotoUrl: {
                successMessage: '',
                failureMessage: '',
                showForm: !state.updatePhotoUrl.showForm
            } });
            if (newState.updatePhotoUrl.showForm) {
                newState.updateEmail.showForm = false;
                newState.updatePassword.showForm = false;
            }
            return newState;
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
                successMessage: Messages.ApiResponse.UpdatePhotoUrlSucess
            } });
        }

        case UserActionTypes.SendEmailVerification: {
            return assign(state, { sendEmailVerification: {
                isRequesting: true
            }});
        }

        case UserActionTypes.SendEmailVerificationFailure: {
            return assign(state, { sendEmailVerification: {
                isRequesting: false,
                successMessage: '',
                failureMessage: getErrorMessage(action.payload)
            } });
        }

        case UserActionTypes.SendEmailVerificationSuccess: {
            return assign(state, { sendEmailVerification: {
                isRequesting: false,
                failureMessage: '',
                successMessage: Messages.ApiResponse.UpdateEmailSuccess
            } });
        }
    }

    return state;
};

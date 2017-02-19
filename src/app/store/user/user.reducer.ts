import { assign } from '../../helpers/assign';
import { UserActionTypes } from './user.actionTypes';
import { UserActions } from './user.actions';
import { UserState } from './user.state';
import { Reducer } from '../reducer';

export const UserReducer: Reducer<UserState, UserActions.UserAction> = (state = new UserState(), action = { type: '', payload: '' }) => {

    switch (action.type) {

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
    }

    return state;
};

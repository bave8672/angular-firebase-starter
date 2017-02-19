import { AuthConfiguration, EmailPasswordCredentials, FirebaseAuthState } from 'angularfire2/auth';
import { UserActionTypes } from './user.actionTypes';
import { Action } from '@ngrx/store';

export namespace UserActions {

    export class ShowLogInModal implements Action {
        type = UserActionTypes.ShowLogInModal;
        payload: void;
    }

    export class HideLogInModal implements Action {
        type = UserActionTypes.HideLogInModal;
        payload: void;
    }

    export class LogIn implements Action {
        type = UserActionTypes.LogIn;
        constructor(public payload: AuthConfiguration | EmailPasswordCredentials) {};
    }

    export class LogInFailure implements Action {
        type = UserActionTypes.LogInFailure;
        constructor(public payload: any) {};
    }

    export class LogInSuccess implements Action {
        type = UserActionTypes.LogInSuccess;
        constructor(public payload: FirebaseAuthState) {};
    }

    export class SignUp implements Action {
        type = UserActionTypes.SignUp;
        payload: void;
    }

    export class LogOut implements Action {
        type = UserActionTypes.LogOut;
        payload: void;
    }

    export type UserAction =
        LogIn
        | LogInFailure
        | LogInSuccess
        | SignUp
        | LogOut;
}

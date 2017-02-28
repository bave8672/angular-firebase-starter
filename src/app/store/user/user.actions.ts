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
        constructor(public payload: EmailPasswordCredentials) {}
    }

    export class SignUpFailure implements Action {
        type = UserActionTypes.SignUpFailure;
        constructor(public payload: any) {}
    }

    export class LogOut implements Action {
        type = UserActionTypes.LogOut;
        payload: void;
    }

    export class ResetPassword implements Action {
        type = UserActionTypes.ResetPassword;
        // payload: user email
        constructor(public payload: string) {}
    }

    export type UserAction =
        LogIn
        | LogInFailure
        | LogInSuccess
        | SignUp
        | SignUpFailure
        | LogOut
        | ResetPassword;
}

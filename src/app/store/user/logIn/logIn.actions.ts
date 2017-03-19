import { AuthConfiguration, EmailPasswordCredentials, FirebaseAuthState } from 'angularfire2/auth';
import { Action } from '@ngrx/store';
import { LogInActionTypes } from './logIn.actionTypes';

export namespace LogInActions {

    export class ShowModal implements Action {
        type = LogInActionTypes.ShowModal;
        payload: void;
    }

    export class HideModal implements Action {
        type = LogInActionTypes.HideModal;
        payload: void;
    }

    export class LogIn implements Action {
        type = LogInActionTypes.LogIn;
        constructor(public payload: AuthConfiguration | EmailPasswordCredentials) {};
    }

    export class Failure implements Action {
        type = LogInActionTypes.Failure;
        constructor(public payload: any) {};
    }

    export class Success implements Action {
        type = LogInActionTypes.Success;
        constructor(public payload: FirebaseAuthState) {};
    }

    export type LogInAction =
        ShowModal
        | HideModal
        | LogIn
        | Failure
        | Success;
}

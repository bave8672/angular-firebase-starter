import { EmailPasswordCredentials } from 'angularfire2/auth';
import { Action } from '@ngrx/store';
import { SignUpActionTypes } from './signUp.actionTypes';

export namespace SignUpActions {

    export class SignUp implements Action {
        type = SignUpActionTypes.SignUp;
        constructor(public payload: EmailPasswordCredentials) {}
    }

    export class Failure implements Action {
        type = SignUpActionTypes.Failure;
        constructor(public payload: any) {}
    }
}

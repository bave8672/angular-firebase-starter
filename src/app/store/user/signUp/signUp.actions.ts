import { Action } from '@ngrx/store';

import { SignUpActionTypes } from './signUp.actionTypes';

export interface EmailPasswordCredentials {
    readonly email: string;
    readonly password: string;
}

export namespace SignUpActions {

    export class SignUp implements Action {
        readonly type = SignUpActionTypes.SignUp;
        constructor(public readonly payload: EmailPasswordCredentials) {}
    }

    export class Failure implements Action {
        readonly type = SignUpActionTypes.Failure;
        constructor(public readonly payload: any) {}
    }
}

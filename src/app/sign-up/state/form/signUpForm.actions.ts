import { Action } from '@ngrx/store';

import { SignUpFormActionTypes } from './signUpForm.actionTypes';

export interface EmailPasswordCredentials {
    readonly email: string;
    readonly password: string;
}

export namespace SignUpActions {
    export class SignUp implements Action {
        readonly type = SignUpFormActionTypes.SignUp;
        constructor(public readonly payload: EmailPasswordCredentials) {}
    }

    export class Failure implements Action {
        readonly type = SignUpFormActionTypes.Failure;
        constructor(public readonly payload: any) {}
    }
}

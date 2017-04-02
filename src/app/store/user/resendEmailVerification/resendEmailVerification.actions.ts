import { ResendEmailVerificationActionTypes } from './resendEmailVerification.actionTypes';
import { Action } from '@ngrx/store';

export namespace ResendEmailVerificationActions {

    export class Resend implements Action {
        type = ResendEmailVerificationActionTypes.Resend;
        payload: void;
    }

    export class Failure implements Action {
        type = ResendEmailVerificationActionTypes.Failure;
        constructor(public payload: any) {}
    }

    export class Success implements Action {
        type = ResendEmailVerificationActionTypes.Success;
        constructor(public payload: any) {}
    }
}

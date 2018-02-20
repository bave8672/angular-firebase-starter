import { ResendEmailVerificationActionTypes } from './resendEmailVerification.actionTypes';
import { Action } from '@ngrx/store';

export namespace ResendEmailVerificationActions {
    export class Resend implements Action {
        readonly type = ResendEmailVerificationActionTypes.Resend;
    }

    export class Failure implements Action {
        readonly type = ResendEmailVerificationActionTypes.Failure;
        constructor(public readonly payload: any) {}
    }

    export class Success implements Action {
        readonly type = ResendEmailVerificationActionTypes.Success;
        constructor(public readonly payload: any) {}
    }
}

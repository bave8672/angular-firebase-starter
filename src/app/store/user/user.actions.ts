import { AuthConfiguration, EmailPasswordCredentials, FirebaseAuthState } from 'angularfire2/auth';
import { UserActionTypes } from './user.actionTypes';
import { Action } from '@ngrx/store';

export namespace UserActions {

    export class LogOut implements Action {
        type = UserActionTypes.LogOut;
        payload: void;
    }

    export class ToggleUpdatePasswordForm implements Action {
        type = UserActionTypes.ToggleUpdatePasswordForm;
        payload: void;
    }

    export class ResetPassword implements Action {
        type = UserActionTypes.ResetPassword;
        // payload: user email
        constructor(public payload: string) {}
    }

    export class ResetPasswordFailure implements Action {
        type = UserActionTypes.ResetPasswordFailure;
        constructor(public payload: any) {}
    }

    export class ResetPasswordSuccess implements Action {
        type = UserActionTypes.ResetPasswordSuccess;
        constructor(public payload: any) {} // TODO: type?
    }

    export class UpdatePassword implements Action {
        type = UserActionTypes.UpdatePassword;
        constructor(public payload: {
            old: string;
            new: string
        }) {}
    }

    export class UpdatePasswordFailure implements Action {
        type = UserActionTypes.UpdatePasswordFailure;
        constructor(public payload: any) {}
    }

    export class UpdatePasswordSuccess implements Action {
        type = UserActionTypes.UpdatePasswordSuccess;
        constructor(public payload: any) {} // TODO: type?
    }

    export class ToggleUpdateEmailForm implements Action {
        type = UserActionTypes.ToggleUpdateEmailForm;
        payload: void;
    }

    export class UpdateEmail implements Action {
        type = UserActionTypes.UpdateEmail;
        // payload: new Email
        constructor(public payload: string) {}
    }

    export class UpdateEmailFailure implements Action {
        type = UserActionTypes.UpdateEmailFailure;
        constructor(public payload: any) {}
    }

    export class UpdateEmailSuccess implements Action {
        type = UserActionTypes.UpdateEmailSuccess;
        constructor(public payload: any) {} // TODO: type?
    }

    export class ToggleUpdatePhotoUrl implements Action {
        type = UserActionTypes.ToggleUpdatePhotoUrl;
        payload: void;
    }

    export class UpdatePhotoUrl implements Action {
        type = UserActionTypes.UpdatePhotoUrl;
        // payload: new PhotoUrl
        constructor(public payload: string) {}
    }

    export class UpdatePhotoUrlFailure implements Action {
        type = UserActionTypes.UpdatePhotoUrlFailure;
        constructor(public payload: any) {}
    }

    export class UpdatePhotoUrlSuccess implements Action {
        type = UserActionTypes.UpdatePhotoUrlSuccess;
        constructor(public payload: any) {} // TODO: type?
    }

    export class SendEmailVerification implements Action {
        type = UserActionTypes.SendEmailVerification;
        payload: void;
    }

    export class SendEmailVerificationSuccess implements Action {
        type = UserActionTypes.SendEmailVerificationSuccess;
        constructor(public payload: any) {}
    }

    export class SendEmailVerificationFailure implements Action {
        type = UserActionTypes.SendEmailVerificationFailure;
        constructor(public payload: any) {}
    }

    export type UserAction =
        | LogOut
        | ResetPassword
        | ToggleUpdatePasswordForm
        | UpdatePassword
        | UpdatePasswordFailure
        | UpdatePasswordSuccess
        | ToggleUpdateEmailForm
        | UpdateEmail
        | UpdateEmailFailure
        | UpdateEmailSuccess
        | UpdatePhotoUrl
        | UpdatePhotoUrlFailure
        | UpdatePhotoUrlSuccess
        | SendEmailVerification
        | SendEmailVerificationSuccess
        | SendEmailVerificationFailure;
}

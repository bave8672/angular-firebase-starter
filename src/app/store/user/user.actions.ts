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

    export class ShowUpdatePasswordForm implements Action {
        type = UserActionTypes.ShowUpdatePasswordForm;
        payload: void;
    }

    export class HideUpdatePasswordForm implements Action {
        type = UserActionTypes.HideUpdatePasswordForm;
        payload: void;
    }

    export class ToggleUpdatePasswordResetForm implements Action {
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

    export class TryUpdatePhotoUrl implements Action {
        type = UserActionTypes.TryUpdatePhotoUrl;
        // payload: new PhotoUrl
        constructor(public payload: string) {}
    }

    export class TryUpdatePhotoUrlFailure implements Action {
        type = UserActionTypes.TryUpdatePhotoUrlFailure;
        constructor(public payload: any) {}
    }

    export class TryUpdatePhotoUrlSuccess implements Action {
        type = UserActionTypes.TryUpdatePhotoUrlSuccess;
        constructor(public payload: any) {} // TODO: type?
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

    export type UserAction =
        LogIn
        | LogInFailure
        | LogInSuccess
        | SignUp
        | SignUpFailure
        | LogOut
        | ResetPassword
        | UpdatePassword
        | UpdatePasswordFailure
        | UpdatePasswordSuccess
        | UpdateEmail
        | UpdateEmailFailure
        | UpdateEmailSuccess
        | UpdatePhotoUrl
        | UpdatePhotoUrlFailure
        | UpdatePhotoUrlSuccess;
}

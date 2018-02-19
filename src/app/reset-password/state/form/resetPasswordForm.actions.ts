import { Action } from '@ngrx/store';
import { ResetPasswordFormActionTypes } from 'app/reset-password/state/form/resetPasswordForm.actionTypes';

export namespace ResetPasswordFormActions {
    interface BaseResetPasswordFormAction extends Action {
        readonly type: ResetPasswordFormActionTypes;
    }

    export class Reset implements BaseResetPasswordFormAction {
        readonly type = ResetPasswordFormActionTypes.Reset;
        constructor(public payload: string) {}
    }

    export class Failure implements BaseResetPasswordFormAction {
        readonly type = ResetPasswordFormActionTypes.Failure;
    }

    export class Success implements BaseResetPasswordFormAction {
        readonly type = ResetPasswordFormActionTypes.Success;
    }

    export type ResetPasswordFormAction = Reset | Failure | Success;
}

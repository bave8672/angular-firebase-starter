import { Action } from '@ngrx/store';
import { UpdatePasswordActionTypes } from 'app/account/user/update-password/state/updatePassword.actionTypes';

export namespace UpdatePasswordActions {

    export class ToggleForm implements Action {
        readonly type = UpdatePasswordActionTypes.ToggleForm;
        payload: void;
    }

    export class Update implements Action {
        readonly type = UpdatePasswordActionTypes.Update;
        constructor(public readonly payload: {
            old: string,
            new: string
        }) {}
    }

    export class Failure implements Action {
        readonly type = UpdatePasswordActionTypes.Failure;
        constructor(public readonly payload: any) {}
    }

    export class Success implements Action {
        readonly type = UpdatePasswordActionTypes.Success;
        constructor(public readonly payload: any) {}
    }
}

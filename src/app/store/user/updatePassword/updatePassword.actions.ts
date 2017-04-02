import { UpdatePasswordActionTypes } from './updatePassword.actionTypes';
import { Action } from '@ngrx/store';

export namespace UpdatePasswordActions {

    export class ToggleForm implements Action {
        type = UpdatePasswordActionTypes.ToggleForm;
        payload: void;
    }

    export class Update implements Action {
        type = UpdatePasswordActionTypes.Update;
        constructor(public payload: {
            old: string,
            new: string
        }) {}
    }

    export class Failure implements Action {
        type = UpdatePasswordActionTypes.Failure;
        constructor(public payload: any) {}
    }

    export class Success implements Action {
        type = UpdatePasswordActionTypes.Success;
        constructor(public payload: any) {}
    }
}

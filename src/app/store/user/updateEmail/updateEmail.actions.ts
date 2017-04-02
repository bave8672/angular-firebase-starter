import { Action } from '@ngrx/store';
import { UpdateEmailActionTypes } from './updateEmail.actionTypes';

export namespace UpdateEmailActions {

    export class ToggleForm implements Action {
        type = UpdateEmailActionTypes.ToggleForm;
        payload: void;
    }

    export class Update implements Action {
        type = UpdateEmailActionTypes.Update;
        // payload: new Email
        constructor(public payload: string) {}
    }

    export class Failure implements Action {
        type = UpdateEmailActionTypes.Failure;
        constructor(public payload: any) {}
    }

    export class Success implements Action {
        type = UpdateEmailActionTypes.Success;
        constructor(public payload: any) {} // TODO: type?
    }

    export type UpdateEmailAction =
        | ToggleForm
        | Update
        | Failure
        | Success;
}

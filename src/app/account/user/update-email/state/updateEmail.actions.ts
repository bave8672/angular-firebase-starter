import { UpdateEmailActionTypes } from './updateEmail.actionTypes';
import { Action } from '@ngrx/store';

export namespace UpdateEmailActions {
    export class ToggleForm implements Action {
        readonly type = UpdateEmailActionTypes.ToggleForm;
        payload: void;
    }

    export class Update implements Action {
        readonly type = UpdateEmailActionTypes.Update;
        // payload: new Email
        constructor(public readonly payload: string) {}
    }

    export class Failure implements Action {
        readonly type = UpdateEmailActionTypes.Failure;
        constructor(public readonly payload: any) {}
    }

    export class Success implements Action {
        readonly type = UpdateEmailActionTypes.Success;
        constructor(public readonly payload: any) {} // TODO: type?
    }

    export type UpdateEmailAction = ToggleForm | Update | Failure | Success;
}

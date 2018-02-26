import { Action } from '@ngrx/store';
import { UpdatePhotoUrlActionTypes } from 'app/account/user/update-photo-url/state/updatePhotoUrl.actionTypes';

export namespace UpdatePhotoUrlActions {
    export class ToggleForm implements Action {
        readonly type = UpdatePhotoUrlActionTypes.ToggleForm;
    }

    export class Update implements Action {
        readonly type = UpdatePhotoUrlActionTypes.Update;
        constructor(public readonly payload: string) {}
    }

    export class Failure implements Action {
        readonly type = UpdatePhotoUrlActionTypes.Failure;
        constructor(public readonly payload: any) {}
    }

    export class Success implements Action {
        readonly type = UpdatePhotoUrlActionTypes.Success;
        constructor(public readonly payload: any) {}
    }
}

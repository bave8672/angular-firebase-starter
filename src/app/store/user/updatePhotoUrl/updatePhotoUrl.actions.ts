import { UpdatePhotoUrlActionTypes } from './';
import { Action } from '@ngrx/store';

export namespace UpdatePhotoUrlActions {

    export class ToggleForm implements Action {
        type = UpdatePhotoUrlActionTypes.ToggleForm;
        payload: void;
    }

    export class Update implements Action {
        type = UpdatePhotoUrlActionTypes.Update;
        constructor(public payload: string) {}
    }

    export class Failure implements Action {
        type = UpdatePhotoUrlActionTypes.Failure;
        constructor(public payload: any) {}
    }

    export class Success implements Action {
        type = UpdatePhotoUrlActionTypes.Success;
        constructor(public payload: any) {}
    }
};

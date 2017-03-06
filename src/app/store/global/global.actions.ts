import { Action } from '@ngrx/store';
import { GlobalActionTypes } from './global.actionTypes';
export namespace GlobalActions {

    export class AppStart implements Action {
        type = GlobalActionTypes.AppStart;
        payload: void;
    }

    export type GlobalAction = AppStart;
}
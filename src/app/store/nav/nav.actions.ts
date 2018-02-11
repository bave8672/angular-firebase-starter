import { NavActionTypes } from './nav.actionTypes';
import { Action } from '@ngrx/store';
export namespace NavActions {

    export class ToggleNavigation implements Action {
        readonly type = NavActionTypes.ToggleNavigation;
        payload: void;
    }

    export type NavAction =
        ToggleNavigation;
}

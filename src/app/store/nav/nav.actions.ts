import { NavActionTypes } from './nav.actionTypes';
import { Action } from '@ngrx/store';
export namespace NavActions {

    export class ToggleNavigation implements Action {
        type = NavActionTypes.ToggleNavigation;
        payload: void;
    }

    export type NavAction =
        ToggleNavigation;
}

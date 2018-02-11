import { NavActions, NavState } from '../';
import { NavActionTypes } from './nav.actionTypes';

export function NavReducer(
    state: NavState,
    action: NavActions.NavAction
): NavState {
    switch (action.type) {
        case NavActionTypes.ToggleNavigation:
            return { ...state, showNavigation: !state.showNavigation };

        default:
            return state;
    }
}

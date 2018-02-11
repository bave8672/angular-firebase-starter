import { NavActionTypes } from './nav.actionTypes';
import { NavState } from 'app/store/nav/nav.state';
import { NavActions } from 'app/store/nav/nav.actions';

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

import { assign } from '../../helpers/assign';
import { NavActionTypes } from './nav.actionTypes';
import { NavState } from './navState';
import { Reducer } from '../reducer';
import { NavActions } from './nav.actions';

export const NavReducer: Reducer<NavState, NavActions.NavAction> = (state = new NavState(), action) => {

    switch (action.type) {

        case NavActionTypes.ToggleNavigation: {
            return assign(state, { showNavigation: !state.showNavigation });
        }

        case '[Router] Update Location': { // TODO: what is this event?
            if (state.showNavigation) {
                return assign(state, { showNavigation: false });
            }
        }
    }

    return state;
}

import { assign } from '../../helpers/assign';
import { NavActionTypes } from './nav.actionTypes';
import { NavState } from './navState';
import { ActionReducer } from '@ngrx/store';
import { routerActions } from '@ngrx/router-store';

export const NavReducer: ActionReducer<NavState> = (state = new NavState(), action) => {

    switch (action.type) {

        case NavActionTypes.ToggleNavigation: {
            return assign(state, { showNavigation: !state.showNavigation });
        }

        case routerActions.UPDATE_LOCATION: {
            if (state.showNavigation) {
                return assign(state, { showNavigation: false });
            }
        }
    }

    return state;
};

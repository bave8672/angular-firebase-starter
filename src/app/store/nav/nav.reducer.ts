import { DefaultNavState, NavActionTypes, NavState } from '../';
import { assign } from '../../helpers/assign';
import { routerActions } from '@ngrx/router-store';
import { ActionReducer } from '@ngrx/store';

export const NavReducer: ActionReducer<NavState> = (state = DefaultNavState, action) => {

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

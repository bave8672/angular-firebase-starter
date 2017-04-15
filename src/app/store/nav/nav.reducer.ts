import { DefaultNavState, NavState } from '../';
import { NavActionTypes } from './nav.actionTypes';
import { hashReducer, useDefaultState } from '../../helpers';
import { ActionMap } from '../../helpers/actionMap';
import { assign } from '../../helpers/assign';
import { compose } from '@ngrx/core';
import { routerActions } from '@ngrx/router-store';
import { ActionReducer } from '@ngrx/store';


export const NavReducer = compose<ActionMap<NavState>, ActionReducer<NavState>, ActionReducer<NavState>>(
    useDefaultState(DefaultNavState),
    hashReducer
)({
    [NavActionTypes.ToggleNavigation]:

        (state, _) => assign(state, { showNavigation: !state.showNavigation }),

    [routerActions.UPDATE_LOCATION]:

        (state, _) => {
            if (state.showNavigation) {
                return assign(state, { showNavigation: false });
            }
            return state;
        }
});

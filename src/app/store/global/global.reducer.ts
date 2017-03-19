import { assignDeep } from '../../helpers/';
import { GlobalActionTypes } from './global.actionTypes';
import { AppState } from '../app-state';
import { ActionReducer } from '@ngrx/store';

export const GlobalReducer: ActionReducer<AppState> = (state = new AppState(), action) => {

    switch (action.type) {

        case GlobalActionTypes.AppStart: {
            // Ensure app state includes all properties, including any ones that may be new.
            return assignDeep(new AppState(), state);
        }
    }

    return state;
};

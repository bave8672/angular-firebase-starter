import { assignDeep } from '../../helpers/';
import { GlobalActionTypes, AppState, DefaultAppState } from '../';
import { ActionReducer } from '@ngrx/store';

export const GlobalReducer: ActionReducer<AppState> = (state = DefaultAppState, action) => {

    switch (action.type) {

        case GlobalActionTypes.AppStart: {
            // Ensure app state includes all properties, including any ones that may be new.
            return assignDeep(DefaultAppState, state);
        }
    }

    return state;
};

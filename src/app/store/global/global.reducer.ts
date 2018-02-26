import { ActionReducer } from '@ngrx/store';
import { AppState, defaultAppState } from 'app/store/app.state';
import { GlobalActions } from 'app/store/global/global.actions';

import { assignDeep } from '../../helpers/';
import { GlobalActionTypes } from './global.actionTypes';
import { environment } from 'environments/environment.prod';

export function globalReducer(
    reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
    return function(
        state = defaultAppState,
        action: GlobalActions.GlobalAction
    ) {
        if (!environment.production) {
            console.info(action.type, action.payload);
        }

        switch (action.type) {
            case GlobalActionTypes.AppStart:
                state = assignDeep(defaultAppState, state);
        }

        return reducer(state, action);
    };
}

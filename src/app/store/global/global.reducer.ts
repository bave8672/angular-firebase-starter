import { ActionReducer } from '@ngrx/store';
import { AppState, DefaultAppState } from 'app/store/app.state';
import { GlobalActions } from 'app/store/global/global.actions';

import { assignDeep } from '../../helpers/';
import { GlobalActionTypes } from './global.actionTypes';

export function GlobalReducer(
    reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
    return function(
        state = DefaultAppState,
        action: GlobalActions.GlobalAction
    ) {
        switch (action.type) {
            case GlobalActionTypes.AppStart:
                state = assignDeep(DefaultAppState, state);
        }

        return reducer(state, action);
    };
}

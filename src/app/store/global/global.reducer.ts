import { AppState, DefaultAppState } from '../';
import { GlobalActionTypes} from './global.actionTypes';
import { hashReducer, useDefaultState } from '../../helpers';
import { assignDeep } from '../../helpers/';
import { ActionMap } from '../../helpers/actionMap';
import { compose } from '@ngrx/core';
import { ActionReducer } from '@ngrx/store';

export const GlobalReducer = compose<ActionMap<AppState>, ActionReducer<AppState>, ActionReducer<AppState>>(
    useDefaultState(DefaultAppState),
    hashReducer
)({
    [GlobalActionTypes.AppStart]:

        (state, _) => assignDeep(DefaultAppState, state)
});

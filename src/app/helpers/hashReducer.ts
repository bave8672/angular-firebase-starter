import { ActionReducer } from '@ngrx/store';
import { ActionMap } from './';

export function hashReducer<T>(map: ActionMap<T>): ActionReducer<T> {
    return (state, action) => map[action.type] ? map[action.type](state, action) : state;
}

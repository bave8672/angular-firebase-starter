import { ActionReducer, Action } from '@ngrx/store';

export function useDefaultState<T>(defaultState: T) {
    return (reducer: ActionReducer<T>): ActionReducer<T> => (state = defaultState, action: Action) => reducer(state, action);
}

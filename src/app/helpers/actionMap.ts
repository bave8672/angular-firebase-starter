import { ActionReducer } from '@ngrx/store';

export interface ActionMap<T> {
    [type: string]: ActionReducer<T>;
};

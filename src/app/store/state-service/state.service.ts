import { environment } from '../../../environments/environment';
import { Actions } from '@ngrx/effects';
import { AppState } from '../app-state';
import { Action, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

export type StateSelector<T> = (state: AppState) => T;

@Injectable()
export class StateService {

    constructor(
        private store: Store<AppState>,
        public actions$: Actions
    ) {
        if (!environment.production) {
            this.actions$.subscribe(a => console.info(a.type, a.payload));
        }
     }

    dispatch(...actions: Action[]) {
        actions.forEach(action => this.store.dispatch(action));
    }

    select<T>(selector: StateSelector<T>) {
        return this.store.select(selector);
    }
}

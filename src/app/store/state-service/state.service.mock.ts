import { Actions } from '@ngrx/effects';
import { StateService } from './state.service';
import { Injectable } from '@angular/core';
import { AppState } from '../app.state';

export function mockStateService(stateRef: AppState) {

    @Injectable()
    class MockStateService {
        constructor(public actions$: Actions) {}
        select(fn: Function) {
            return fn(stateRef);
        }
    }

    return MockStateService;
}

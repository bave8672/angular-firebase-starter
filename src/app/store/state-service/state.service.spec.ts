import { AppState } from '../app-state';
import { StateService } from './state.service';
import { inject, TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Subject } from 'rxjs/Rx';

describe('StateService', () => {

    let service: StateService;

    const state$ = new Subject<AppState>();
    const actions$ = new Subject<Action>();

    class MockStore {
        select(fn) {
            return state$.map(fn);
        }
        dispatch(action) {
            actions$.next(action);
        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                StateService,
                { provide: Store, useClass: MockStore },
                { provide: Actions, useValue: actions$ }
            ]
        });

        inject([StateService], (_service: StateService) => {
            service = _service;
        })();
    });

    it('should select state from the store', done => {
        const $ = service.select(s => s.user.logIn.showForm);

        const newState = new AppState();
        expect(newState.user.logIn.showForm).toBe(false);
        newState.user.logIn.showForm = true;

        $.subscribe(val => {
            expect(val).toBe(true);
            done();
        });

        state$.next(newState);
    });
});

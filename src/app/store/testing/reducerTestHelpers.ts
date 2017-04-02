import { ActionReducer } from '@ngrx/store';

export function shouldNotAlterStateOnUnknownAction(reducer: ActionReducer<any>) {

    it('Should not alter state on unknown action type', () => {
        const oldState = 'JustAString';
        expect(reducer(oldState, { type: null })).toBe(oldState);
    });
}

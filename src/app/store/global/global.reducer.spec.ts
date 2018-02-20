import { GlobalActions } from 'app/store/global/global.actions';
import { globalReducer } from 'app/store/global/global.reducer';
import { shouldNotAlterStateOnUnknownAction } from 'app/store/testing';

import { assignDeep } from '../../helpers';
import { AppState, DefaultAppState } from '../app.state';
import { FormStates } from '../forms/formState';

describe('Global Reducer', () => {
    const reducer = globalReducer(state => state);

    let oldState: AppState;

    beforeEach(() => {
        oldState = assignDeep(DefaultAppState, {});
    });

    shouldNotAlterStateOnUnknownAction(reducer);

    it(`Assigns missing properties to the state tree
        ON App Start
        using the default state`, () => {
        const newState = reducer(oldState, new GlobalActions.AppStart());

        expect(newState).toEqual(DefaultAppState);
    });

    it(`Does not alter existing state properties
        IF they are part of the correct schema`, () => {
        oldState.user.logIn = undefined;
        oldState.user.updateEmail.failureMessage = 'Example';

        const newState = reducer(oldState, new GlobalActions.AppStart());

        expect(newState.user.logIn).toEqual(FormStates.Default);
        expect(newState.user.updateEmail.failureMessage).toBe(
            'Example'
        );
    });
});

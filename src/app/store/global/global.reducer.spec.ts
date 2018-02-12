import { GlobalActions } from 'app/store/global/global.actions';
import { GlobalReducer } from 'app/store/global/global.reducer';
import { shouldNotAlterStateOnUnknownAction } from 'app/store/testing';

import { assignDeep } from '../../helpers';
import { AppState, DefaultAppState } from '../app.state';
import { FormStates } from '../forms/formState';

describe('Global Reducer', () => {
    const globalReducer = GlobalReducer(state => state);

    let oldState: AppState;

    beforeEach(() => {
        oldState = assignDeep(DefaultAppState, {});
    });

    shouldNotAlterStateOnUnknownAction(globalReducer);

    it(`Assigns missing properties to the state tree
        ON App Start
        using the default state`, () => {
        oldState.todos = undefined;

        const newState = globalReducer(oldState, new GlobalActions.AppStart());

        expect(newState).toEqual(DefaultAppState);
    });

    it(`Does not alter existing state properties
        IF they are part of the correct schema`, () => {
        oldState.user.logIn = undefined;
        oldState.user.sendEmailVerification.failureMessage = 'Example';

        const newState = globalReducer(oldState, new GlobalActions.AppStart());

        expect(newState.user.logIn).toEqual(FormStates.Default);
        expect(newState.user.sendEmailVerification.failureMessage).toBe(
            'Example'
        );
    });
});

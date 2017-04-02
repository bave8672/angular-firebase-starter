import { GlobalActions, GlobalReducer, shouldNotAlterStateOnUnknownAction, FormStates } from '../';
import { AppState, DefaultAppState } from '../app.state';
import { assignDeep } from '../../helpers';

describe('Global Reducer', () => {

    let oldState: AppState;

    beforeEach(() => {
        oldState = assignDeep(DefaultAppState, {});
    });

    shouldNotAlterStateOnUnknownAction(GlobalReducer);

    it(`Assigns missing properties to the state tree
        ON App Start
        using the default state`, () => {

        oldState.todos = undefined;

        const newState = GlobalReducer(oldState, new GlobalActions.AppStart());

        expect(newState).toEqual(DefaultAppState);
    });

    it(`Does not alter existing state properties
        IF they are part of the correct schema`, () => {

        oldState.user.logIn = undefined;
        oldState.user.sendEmailVerification.failureMessage = 'Example';

        const newState = GlobalReducer(oldState, new GlobalActions.AppStart());

        expect(newState.user.logIn).toEqual(FormStates.Default);
        expect(newState.user.sendEmailVerification.failureMessage).toBe('Example');
    });

});

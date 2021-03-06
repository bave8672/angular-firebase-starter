import { FormState, FormStates } from 'app/store/forms/formState';
import { LogInActions } from 'app/store/user/logIn/logIn.actions';

import { assignDeep } from '../../../helpers';
import { Messages } from '../../../resources/messages';
import { shouldNotAlterStateOnUnknownAction } from '../../testing/reducerTestHelpers';
import { logInReducer } from './logIn.reducer';

describe('Log In Reducer', () => {
    shouldNotAlterStateOnUnknownAction(logInReducer);

    let oldState: FormState;

    beforeEach(() => {
        oldState = assignDeep(FormStates.Default);
    });

    it('Shows the form WHEN ShowModal is called', () => {
        oldState.showForm = false;
        const newState = logInReducer(oldState, new LogInActions.ShowModal());
        expect(newState.showForm).toBe(true);
    });

    it('Hides the form WHEN HideModal is called', () => {
        oldState.showForm = true;
        const newState = logInReducer(oldState, new LogInActions.HideModal());
        expect(newState.showForm).toBe(false);
    });

    it('Assigns the requesting state WHEN UpdatePassword is called', () => {
        const newState = logInReducer(
            oldState,
            new LogInActions.LogIn({} as any)
        );
        expect(newState).toEqual(FormStates.Requesting);
    });

    it('Displays the correct error message WHEN failure is called', () => {
        const newState = logInReducer(oldState, new LogInActions.Failure({}));
        expect(newState).toEqual(
            FormStates.Failure(Messages.ApiResponse.ServerError)
        );
    });

    it('Displays the correct message WHEN success is called', () => {
        const newState = logInReducer(oldState, new LogInActions.Success());
        expect(newState).toEqual(FormStates.Success(''));
    });
});

import { FormState, FormStates, LogInActions } from '../..';
import { assignDeep } from '../../../helpers';
import { Messages } from '../../../resources/messages';
import { shouldNotAlterStateOnUnknownAction } from '../../testing/reducerTestHelpers';
import { LogInReducer } from './logIn.reducer';

describe('Log In Reducer', () => {

    shouldNotAlterStateOnUnknownAction(LogInReducer);

    let oldState: FormState;

    beforeEach(() => {
        oldState = assignDeep(FormStates.Default);
    });

    it('Shows the form WHEN ShowModal is called', () => {
        oldState.showForm = false;
        const newState = LogInReducer(oldState, new LogInActions.ShowModal());
        expect(newState.showForm).toBe(true);
    });

    it('Hides the form WHEN HideModal is called', () => {
        oldState.showForm = true;
        const newState = LogInReducer(oldState, new LogInActions.HideModal());
        expect(newState.showForm).toBe(false);
    });

    it('Assigns the requesting state WHEN UpdatePassword is called', () => {
        const newState = LogInReducer(oldState, new LogInActions.LogIn({} as any));
        expect(newState).toEqual(FormStates.Requesting);
    });

    it('Displays the correct error message WHEN failure is called', () => {
        const newState = LogInReducer(oldState, new LogInActions.Failure({}));
        expect(newState).toEqual(FormStates.Failure(Messages.ApiResponse.ServerError));
    });

    it('Displays the correct message WHEN success is called', () => {
        const newState = LogInReducer(oldState, new LogInActions.Success({} as any));
        expect(newState).toEqual(FormStates.Success(''));
    });
});

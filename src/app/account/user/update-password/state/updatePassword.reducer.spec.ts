import { FormState, FormStates } from 'app/store/forms/formState';
import { UpdatePasswordActions } from 'app/store/user/updatePassword/updatePassword.actions';

import { assignDeep } from '../../../helpers';
import { Messages } from '../../../resources/messages';
import { shouldNotAlterStateOnUnknownAction } from '../../testing/reducerTestHelpers';
import { updatePasswordReducer } from './updatePassword.reducer';

describe('Update Password Reducer', () => {
    shouldNotAlterStateOnUnknownAction(updatePasswordReducer);

    let oldState: FormState;

    beforeEach(() => {
        oldState = assignDeep(FormStates.Default);
    });

    it('Toggles the form visibility WHEN Toggle is called', () => {
        oldState.showForm = false;

        let newState = updatePasswordReducer(
            oldState,
            new UpdatePasswordActions.ToggleForm()
        );
        expect(newState.showForm).toBe(true);

        newState = updatePasswordReducer(
            newState,
            new UpdatePasswordActions.ToggleForm()
        );
        expect(newState.showForm).toBe(false);
    });

    it('Assigns the requesting state WHEN UpdatePassword is called', () => {
        const newState = updatePasswordReducer(
            oldState,
            new UpdatePasswordActions.Update({} as any)
        );
        expect(newState).toEqual(FormStates.Requesting);
    });

    it('Displays the correct error message WHEN failure is called', () => {
        const newState = updatePasswordReducer(
            oldState,
            new UpdatePasswordActions.Failure({})
        );
        expect(newState).toEqual(
            FormStates.Failure(Messages.ApiResponse.ServerError)
        );
    });

    it('Displays the correct message WHEN success is called', () => {
        const newState = updatePasswordReducer(
            oldState,
            new UpdatePasswordActions.Success({})
        );
        expect(newState).toEqual(
            FormStates.Success(Messages.ApiResponse.UpdatePasswordSuccess)
        );
    });
});

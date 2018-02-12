import { FormState, FormStates } from 'app/store/forms/formState';
import { UpdateEmailActions } from 'app/store/user/updateEmail/updateEmail.actions';

import { assignDeep } from '../../../helpers';
import { Messages } from '../../../resources/messages';
import { shouldNotAlterStateOnUnknownAction } from '../../testing';
import { UpdateEmailReducer } from './updateEmail.reducer';

describe('Update Email Reducer', () => {
    shouldNotAlterStateOnUnknownAction(UpdateEmailReducer);

    let oldState: FormState;

    beforeEach(() => {
        oldState = assignDeep(FormStates.Default);
    });

    it('Should toggle the form visibility when toggle is called', () => {
        oldState.showForm = false;
        let newState = UpdateEmailReducer(
            oldState,
            new UpdateEmailActions.ToggleForm()
        );
        expect(newState.showForm).toBe(true);
        newState = UpdateEmailReducer(
            newState,
            new UpdateEmailActions.ToggleForm()
        );
        expect(newState.showForm).toBe(false);
    });

    it('Should show the requesting status WHEN update is called', () => {
        const newState = UpdateEmailReducer(
            oldState,
            new UpdateEmailActions.Update('example@gmail.com')
        );
        expect(newState).toEqual(FormStates.Requesting);
    });

    it('Should show the failure status WHEN failure is called', () => {
        const newState = UpdateEmailReducer(
            oldState,
            new UpdateEmailActions.Failure({})
        );
        expect(newState).toEqual(
            FormStates.Failure(Messages.ApiResponse.ServerError)
        );
    });

    it('Should show the success status WHEN failure is called', () => {
        const newState = UpdateEmailReducer(
            oldState,
            new UpdateEmailActions.Success({})
        );
        expect(newState).toEqual(
            FormStates.Success(Messages.ApiResponse.UpdateEmailSuccess)
        );
    });
});

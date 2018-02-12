import { UpdatePhotoUrlActions } from 'app/store/user/updatePhotoUrl/updatePhotoUrl.actions';

import { assignDeep } from '../../../helpers';
import { Messages } from '../../../resources/messages';
import { shouldNotAlterStateOnUnknownAction } from '../../testing';
import { UpdatePhotoUrlReducer } from './updatePhotoUrl.reducer';
import { FormState, FormStates } from 'app/store/forms/formState';

describe('Update Photo Url Reducer', () => {
    shouldNotAlterStateOnUnknownAction(UpdatePhotoUrlReducer);

    let oldState: FormState;

    beforeEach(() => {
        oldState = assignDeep(FormStates.Default);
    });

    it('Toggles the form visibility WHEN Toggle is called', () => {
        oldState.showForm = false;

        let newState = UpdatePhotoUrlReducer(
            oldState,
            new UpdatePhotoUrlActions.ToggleForm()
        );
        expect(newState.showForm).toBe(true);

        newState = UpdatePhotoUrlReducer(
            newState,
            new UpdatePhotoUrlActions.ToggleForm()
        );
        expect(newState.showForm).toBe(false);
    });

    it('Assigns the requesting state WHEN UpdatePhotoUrl is called', () => {
        const newState = UpdatePhotoUrlReducer(
            oldState,
            new UpdatePhotoUrlActions.Update('')
        );
        expect(newState).toEqual(FormStates.Requesting);
    });

    it('Displays the correct error message WHEN failure is called', () => {
        const newState = UpdatePhotoUrlReducer(
            oldState,
            new UpdatePhotoUrlActions.Failure({})
        );
        expect(newState).toEqual(
            FormStates.Failure(Messages.ApiResponse.ServerError)
        );
    });

    it('Displays the correct message WHEN success is called', () => {
        const newState = UpdatePhotoUrlReducer(
            oldState,
            new UpdatePhotoUrlActions.Success({})
        );
        expect(newState).toEqual(
            FormStates.Success(Messages.ApiResponse.UpdatePhotoUrlSucess)
        );
    });
});

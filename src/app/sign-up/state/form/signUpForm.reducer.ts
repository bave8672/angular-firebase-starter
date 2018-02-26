import { formReducer } from 'app/store/forms/form.reducer.factory';

import { SignUpFormActionTypes } from './signUpForm.actionTypes';
import { FormState } from 'app/store/forms/formState';
import { Action } from '@ngrx/store';

export function signUpFormReducer(state: FormState, action: Action): FormState {
    return formReducer({
        request: SignUpFormActionTypes.SignUp,
        failure: SignUpFormActionTypes.Failure,
    })(state, action);
}

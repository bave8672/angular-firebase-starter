import { formReducer } from 'app/store/forms/form.reducer.factory';

import { SignUpFormActionTypes } from './signUpForm.actionTypes';

export const SignUpFormReducer = formReducer({
    request: SignUpFormActionTypes.SignUp,
    failure: SignUpFormActionTypes.Failure,
});

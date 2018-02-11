import { FormReducer } from 'app/store/forms/form.reducer.factory';

import { SignUpActionTypes } from './signUp.actionTypes';

export const SignUpReducer = FormReducer({
    request: SignUpActionTypes.SignUp,
    failure: SignUpActionTypes.Failure,
});

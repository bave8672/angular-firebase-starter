import { FormReducer } from '../../';
import { SignUpActionTypes } from './signUp.actionTypes';

export const SignUpReducer = FormReducer({
    request: SignUpActionTypes.SignUp,
    failure: SignUpActionTypes.Failure
});


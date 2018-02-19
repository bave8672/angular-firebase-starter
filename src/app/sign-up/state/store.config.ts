import { FormState } from 'app/store/forms/formState';
import { AppState } from 'app/store/app.state';
import { AppFeatureState } from 'app/store/utils/featureState';
import { ActionReducerMap } from '@ngrx/store/src/models';
import { SignUpFormReducer } from 'app/sign-up/state/form/signUpForm.reducer';

export const SIGN_UP_STORE_KEY = 'signUp';

export interface SignUpFeatureState {
    form: FormState;
}

export type SignUpAppState = AppFeatureState<
    AppState,
    typeof SIGN_UP_STORE_KEY,
    SignUpFeatureState
>;

export const SignUpReducers: ActionReducerMap<SignUpFeatureState> = {
    form: SignUpFormReducer,
};

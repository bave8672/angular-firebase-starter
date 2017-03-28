import { FormState, FormStates } from '../';

export interface UserState {
    logIn: FormState;
    signUp: FormState;
    updatePhotoUrl: FormState;
    updatePassword: FormState;
    updateEmail: FormState;
    sendEmailVerification: FormState;
}

export const DefaultUserState: UserState = {
    logIn: FormStates.Default,
    signUp: FormStates.Default,
    updatePhotoUrl: FormStates.Default,
    updatePassword: FormStates.Default,
    updateEmail: FormStates.Default,
    sendEmailVerification: FormStates.Default
};

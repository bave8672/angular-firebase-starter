import { FormState, FormStates } from 'app/store/forms/formState';

export interface UserState {
    logIn: FormState;
    updatePhotoUrl: FormState;
    updatePassword: FormState;
    updateEmail: FormState;
    sendEmailVerification: FormState;
}

export const DefaultUserState: UserState = {
    logIn: FormStates.Default,
    updatePhotoUrl: FormStates.Default,
    updatePassword: FormStates.Default,
    updateEmail: FormStates.Default,
    sendEmailVerification: FormStates.Default,
};

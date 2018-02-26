import { FormState, FormStates } from 'app/store/forms/formState';

export interface UserState {
    logIn: FormState;
}

export const defaultUserState: UserState = {
    logIn: FormStates.Default,
};

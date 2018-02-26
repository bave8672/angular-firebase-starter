import { FormState, FormStates } from 'app/store/forms/formState';

export const GLOBAL_USER_STORE_KEY = 'user';

export interface UserState {
    logIn: FormState;
}

export const defaultUserState: UserState = {
    logIn: FormStates.Default,
};

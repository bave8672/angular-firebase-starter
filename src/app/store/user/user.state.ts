import { FormState } from '../';

export class UserState {
    logIn = new FormState();
    signUp = new FormState();
    updatePhotoUrl = new FormState();
    updatePassword = new FormState();
    updateEmail = new FormState();
    sendEmailVerification = new FormState();
}

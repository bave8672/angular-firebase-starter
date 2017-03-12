import { FormState } from '../';

export class UserState {
    logInModal = new FormState()
    showLogInModal = false;
    isRequestingLogIn = false;
    logInFailure = false;
    isLoggedIn = false;
    firebaseUid = '';
    updatePhotoUrl = new FormState();
    updatePassword = new FormState();
    updateEmail = new FormState();
    sendEmailVerification = new FormState();
}

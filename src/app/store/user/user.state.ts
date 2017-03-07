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
};

export class FormState {
    showForm = false;
    isRequesting = false;
    successMessage = '';
    failureMessage = '';
}

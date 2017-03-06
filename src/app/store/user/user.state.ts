export class UserState {
    showLogInModal = false;
    isRequestingLogIn = false;
    logInFailure = false;
    isLoggedIn = false;
    firebaseUid = '';
    newPhotoUrl = '';
    showUpdatePasswordForm = false;
    isRequestingPasswordUpdate = false;
    passwordUpdateSuccess = false;
    passwordUpdateSuccessMessage = '';
    passwordUpdateFailureMessage = '';
    showUpdateEmailForm = false;
    showUpdatePhotoUrlForm = false;
};

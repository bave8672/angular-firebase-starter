import { ResendEmailVerificationState } from 'app/account/user/send-email-verification/state/resendEmailVerificationState';
import { UpdateEmailState } from 'app/account/user/update-email/state/updateEmailState';
import { AppFeatureState } from 'app/store/utils/featureState';
import { AppState } from 'app/store/app.state';
import { ActionReducerMap } from '@ngrx/store/src/models';
import { resendEmailVerificationReducer } from 'app/account/user/send-email-verification/state/resendEmailVerification.reducer';
import { updateEmailReducer } from 'app/account/user/update-email/state/updateEmail.reducer';
import { UpdatePasswordState } from 'app/account/user/update-password/state/updatePasswordState';
import { updatePasswordReducer } from 'app/account/user/update-password/state/updatePassword.reducer';
import { UpdatePhotoUrlState } from 'app/account/user/update-photo-url/state/updatePhotoUrlState';
import { initialResendVerificationEmailState } from 'app/account/user/send-email-verification/state/initialState';
import { initialUpdateEmailState } from 'app/account/user/update-email/state/initialState';
import { initialUpdatePasswordState } from 'app/account/user/update-password/state/initialState';
import { initialUpdatePhotoUrlState } from 'app/account/user/update-photo-url/state/initialState';
import { updatePhotoUrlReducer } from 'app/account/user/update-photo-url/state/updatePhotoUrl.reducer';

export const USER_STORE_KEY = 'user';

export interface UserFeatureState {
    sendEmailVerification: ResendEmailVerificationState;
    updateEmail: UpdateEmailState;
    updatePassword: UpdatePasswordState;
    updatePhotoUrl: UpdatePhotoUrlState;
}

export type UserAppState = AppFeatureState<
    AppState,
    typeof USER_STORE_KEY,
    UserFeatureState
>;

export const userReducers: ActionReducerMap<UserFeatureState> = {
    sendEmailVerification: resendEmailVerificationReducer,
    updateEmail: updateEmailReducer,
    updatePassword: updatePasswordReducer,
    updatePhotoUrl: updatePhotoUrlReducer,
};

export const initialUserState: UserFeatureState = {
    sendEmailVerification: initialResendVerificationEmailState,
    updateEmail: initialUpdateEmailState,
    updatePassword: initialUpdatePasswordState,
    updatePhotoUrl: initialUpdatePhotoUrlState,
};

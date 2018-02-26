import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {
    USER_STORE_KEY,
    userReducers,
    initialUserState,
} from 'app/account/user/state/store.config';
import { initialAccountState } from 'app/account/state/store.config';
import { EffectsModule } from '@ngrx/effects';
import { ResendEmailVerificationEffects } from 'app/account/user/send-email-verification/state/resendEmailVerification.effects';
import { UpdatePhotoUrlEffects } from 'app/account/user/update-photo-url/state/updatePhotoUrl.effects';
import { UpdateEmailEffects } from 'app/account/user/update-email/state/updateEmail.effects';
import { UpdatePasswordEffects } from 'app/account/user/update-password/state/updatePassword.effects';

@NgModule({
    imports: [
        StoreModule.forFeature(USER_STORE_KEY, userReducers, {
            initialState: initialUserState,
        }),
        EffectsModule.forFeature([
            ResendEmailVerificationEffects,
            UpdatePhotoUrlEffects,
            UpdateEmailEffects,
            UpdatePasswordEffects,
        ]),
    ],
})
export class UserStateModule {}

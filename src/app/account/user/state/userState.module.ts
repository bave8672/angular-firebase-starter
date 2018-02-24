import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store/src/store_module';
import {
    USER_STORE_KEY,
    userReducers,
    initialUserState,
} from 'app/account/user/state/store.config';
import { initialAccountState } from 'app/account/state/store.config';
import { EffectsModule } from '@ngrx/effects/src/effects_module';
import { ResendEmailVerificationEffects } from 'app/account/user/send-email-verification/state/resendEmailVerification.effects';

@NgModule({
    imports: [
        StoreModule.forFeature(USER_STORE_KEY, userReducers, {
            initialState: initialUserState,
        }),
        EffectsModule.forFeature([
            ResendEmailVerificationEffects,
            
        ])
    ],
})
export class UserStateModule {}

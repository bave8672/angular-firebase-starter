import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {
    RESET_PASSWORD_STORE_KEY,
    resetPasswordReducers,
} from 'app/reset-password/state/store.config';
import { EffectsModule } from '@ngrx/effects';
import { ResetPasswordEffects } from 'app/reset-password/state/resetPassword.effects';

@NgModule({
    imports: [
        StoreModule.forFeature(RESET_PASSWORD_STORE_KEY, resetPasswordReducers),
        EffectsModule.forFeature([ResetPasswordEffects]),
    ],
})
export class ResetPasswordStateModule {}

import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SignUpFormEffects } from 'app/sign-up/state/form/signUpForm.effects';
import {
    SIGN_UP_STORE_KEY,
    SignUpReducers,
} from 'app/sign-up/state/store.config';

@NgModule({
    imports: [
        StoreModule.forFeature(SIGN_UP_STORE_KEY, SignUpReducers),
        EffectsModule.forFeature([SignUpFormEffects]),
    ],
})
export class SignUpStateModule {}

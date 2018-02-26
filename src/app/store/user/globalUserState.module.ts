import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { globalUserReducers } from 'app/store/user/store.config';
import {
    GLOBAL_USER_STORE_KEY,
    defaultUserState,
} from 'app/store/user/user.state';
import { EffectsModule } from '@ngrx/effects';
import { LogInEffects } from 'app/store/user/logIn/logIn.effects';

@NgModule({
    imports: [
        StoreModule.forFeature(GLOBAL_USER_STORE_KEY, globalUserReducers, {
            initialState: defaultUserState,
        }),
        EffectsModule.forFeature([LogInEffects]),
    ],
})
export class GlobalUserStateModule {}

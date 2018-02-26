import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {
    accountReducers,
    ACCOUNT_FEATURE_KEY,
    initialAccountState,
} from 'app/account/state/store.config';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from 'app/account/todos/state/todos.effects';

@NgModule({
    imports: [
        StoreModule.forFeature(ACCOUNT_FEATURE_KEY, accountReducers, {
            initialState: initialAccountState,
        }),
        EffectsModule.forFeature([TodosEffects]),
    ],
})
export class AccountStateModule {}

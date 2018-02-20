import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store/src/store_module';
import {
    accountReducers,
    ACCOUNT_FEATURE_KEY,
    initialAccountState,
} from 'app/account/state/store.config';

@NgModule({
    imports: [
        StoreModule.forFeature(ACCOUNT_FEATURE_KEY, accountReducers, {
            initialState: initialAccountState,
        }),
    ],
})
export class AccountStateModule {}

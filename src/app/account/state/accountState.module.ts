import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store/src/store_module';
import {
    accountReducers,
    ACCOUNT_FEATURE_KEY,
} from 'app/account/state/store.config';

@NgModule({
    imports: [StoreModule.forFeature(ACCOUNT_FEATURE_KEY, accountReducers)],
})
export class AccountStateModule {}

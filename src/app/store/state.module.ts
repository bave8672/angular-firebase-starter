import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { defaultAppState } from 'app/store/app.state';
import { globalReducer } from 'app/store/global/global.reducer';
import { appReducers } from 'app/store/store.config';
import { GlobalUserStateModule } from 'app/store/user/globalUserState.module';

@NgModule({
    imports: [
        StoreModule.forRoot(appReducers, {
            metaReducers: [globalReducer],
            initialState: defaultAppState,
        }),
        EffectsModule.forRoot([]),
        GlobalUserStateModule,
    ],
})
export class StateModule {}

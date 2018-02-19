import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DefaultAppState } from 'app/store/app.state';
import { globalReducer } from 'app/store/global/global.reducer';
import { combinedReducers, effects } from 'app/store/store.config';

@NgModule({
    imports: [
        StoreModule.forRoot(combinedReducers, {
            metaReducers: [globalReducer],
            initialState: DefaultAppState,
        }),
        EffectsModule.forRoot(effects()),
    ],
})
export class StateModule {}

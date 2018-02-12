import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DefaultAppState } from 'app/store/app.state';
import { GlobalReducer } from 'app/store/global/global.reducer';
import { CombinedReducers, Effects } from 'app/store/store.config';

@NgModule({
    imports: [
        StoreModule.forRoot(CombinedReducers, {
            metaReducers: [GlobalReducer],
            initialState: DefaultAppState,
        }),
        EffectsModule.forRoot(Effects()),
    ],
})
export class StateModule {}

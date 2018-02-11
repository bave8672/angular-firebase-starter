import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AngularFireModule } from 'angularfire2';
import { GlobalReducer } from 'app/store/global/global.reducer';

import { environment } from '../environments/environment';
import { AccountModule } from './account/account.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { ContentComponent } from './content/content.component';
import { CustomErrorHandler } from './error-handler/custom-error-handler';
import { FooterComponent } from './footer/footer.component';
import { IsLoggedInGuard } from './guards/isLoggedIn.guard';
import { IsNotLoggedInGuard } from './guards/isNotLoggedIn.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { NavComponent } from './nav/nav.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SharedModule } from './shared/shared.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DefaultAppState } from './store/app.state';
import { StateService } from './store/state-service/state.service';
import { CombinedReducers, Effects } from './store/store.config';
import { TodosModule } from './todos/todos.module';

@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        FooterComponent,
        LandingPageComponent,
        NavComponent,
        SignUpComponent,
        LogInComponent,
        ResetPasswordComponent,
    ],
    imports: [
        SharedModule,
        TodosModule,
        RouterModule.forRoot(AppRoutes),
        StoreModule.forRoot(CombinedReducers, {
            metaReducers: [GlobalReducer],
            initialState: DefaultAppState,
        }),
        ...Effects(),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AccountModule,
    ],
    providers: [
        StateService,
        IsLoggedInGuard,
        IsNotLoggedInGuard,
        { provide: ErrorHandler, useClass: CustomErrorHandler },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

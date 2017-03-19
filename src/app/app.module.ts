import { AccountModule } from './account/account.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { ContentComponent } from './content/content.component';
import { CustomErrorHandler } from './errorHandler/customErrorHandler';
import { FirebaseConfig } from './firebase/firebase.config';
import { FooterComponent } from './footer/footer.component';
import { IsLoggedInGuard } from './guards/isLoggedIn.guard';
import { IsPasswordUserGuard } from './guards/isPasswordUser.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { NavComponent } from './nav/nav.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SharedModule } from './shared/shared.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppState } from './store/app-state';
import { StateService } from './store/state-service/state.service';
import { Effects, Reducers } from './store/store.config';
import { TodosModule } from './todos/todos.module';
import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { AngularFireModule } from 'angularfire2';

@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        FooterComponent,
        LandingPageComponent,
        NavComponent,
        SignUpComponent,
        LogInComponent,
        ResetPasswordComponent
    ],
    imports: [
        SharedModule,
        TodosModule,
        RouterModule.forRoot(AppRoutes),
        StoreModule.provideStore(Reducers, new AppState()),
        RouterStoreModule.connectRouter(),
        ...Effects.map(e => EffectsModule.run(e)),
        AngularFireModule.initializeApp(FirebaseConfig),
        AccountModule
    ],
    providers: [
        StateService,
        IsLoggedInGuard,
        IsPasswordUserGuard,
        { provide: ErrorHandler, useClass: CustomErrorHandler }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

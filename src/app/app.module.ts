import { environment } from '../environments/environment';
import { AccountModule } from './account/account.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { ContentComponent } from './content/content.component';
import { CustomErrorHandler } from './error-handler/custom-error-handler';
import { FooterComponent } from './footer/footer.component';
import { IsLoggedInGuard } from './guards/isLoggedIn.guard';
import { IsNotLoggedInGuard } from './guards/isNotLoggedIn.guard';
import { IsPasswordUserGuard } from './guards/isPasswordUser.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { NavComponent } from './nav/nav.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SharedModule } from './shared/shared.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DefaultAppState } from './store/app.state';
import { StateService } from './store/state-service/state.service';
import { Reducer } from './store/store.config';
import { TodosEffects } from './store/todos/todos.effects';
import { UserEffects } from './store/user';
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
        StoreModule.provideStore(Reducer, DefaultAppState),
        RouterStoreModule.connectRouter(),
        EffectsModule.run(UserEffects),
        EffectsModule.run(TodosEffects),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AccountModule
    ],
    providers: [
        StateService,
        IsLoggedInGuard,
        IsNotLoggedInGuard,
        IsPasswordUserGuard,
        { provide: ErrorHandler, useClass: CustomErrorHandler }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

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
import { StateService } from './store/state-service/state.service';
import { StateModule } from './store/state.module';
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
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        StateModule,
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

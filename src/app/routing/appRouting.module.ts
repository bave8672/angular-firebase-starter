import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from 'app/landing-page/landing-page.component';
import { SignUpComponent } from 'app/sign-up/sign-up.component';
import { ResetPasswordComponent } from 'app/reset-password/reset-password.component';
import { IsLoggedInGuard } from 'app/shared/guards/isLoggedIn.guard';
import { IsNotLoggedInGuard } from 'app/shared/guards/isNotLoggedIn.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: LandingPageComponent },
            { path: 'sign-up', component: SignUpComponent },
            {
                path: 'reset-password',
                component: ResetPasswordComponent,
                canActivate: [IsNotLoggedInGuard],
            },
            {
                path: 'account',
                loadChildren: '../account/account.module#AccountModule',
                canActivate: [IsLoggedInGuard],
            },
            { path: '**', redirectTo: '' },
        ]),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}

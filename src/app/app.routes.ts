import { IsNotLoggedInGuard } from './guards/isNotLoggedIn.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'reset-password', component: ResetPasswordComponent, canActivate: [IsNotLoggedInGuard] },
    { path: '**', redirectTo: '' }
];

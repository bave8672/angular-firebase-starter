import { LandingPageComponent } from './landing-page/landing-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: '**', redirectTo: '' }
];

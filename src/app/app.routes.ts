import { SignUpComponent } from './sign-up/sign-up.component';
import { IsLoggedInGuard } from './guards/isLoggedIn.guard';
import { ProfilePageComponent } from './profile/profile-page.component';
import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const AppRoutes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'profile', component: ProfilePageComponent, canActivate: [IsLoggedInGuard] },
    { path: '**', redirectTo: '' }
];

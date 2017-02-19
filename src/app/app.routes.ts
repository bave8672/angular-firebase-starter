import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const AppRoutes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: '**', component: LandingPageComponent}
];

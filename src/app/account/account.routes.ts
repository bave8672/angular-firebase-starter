import { IsLoggedInGuard } from '../guards/isLoggedIn.guard';
import { OutletComponent } from '../shared/outlet/outlet.component';
import { InfoPageComponent } from './info/info-page.component';
import { ProfilePageComponent } from './profile/profile-page.component';
import { Routes } from '@angular/router';

export const AccountRoutes: Routes = [
    {
        path: 'account',
        component: OutletComponent,
        canActivate: [IsLoggedInGuard],
        canActivateChild: [IsLoggedInGuard],
        children: [
            { path: '', component: ProfilePageComponent },
            { path: 'profile', component: ProfilePageComponent },
            { path: 'info', component: InfoPageComponent },
            { path: '**', component: ProfilePageComponent }
        ]
    }
];

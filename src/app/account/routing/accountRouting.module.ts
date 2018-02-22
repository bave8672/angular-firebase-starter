import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfilePageComponent } from 'app/account/profile/profile-page.component';
import { InfoPageComponent } from 'app/account/info/info-page.component';
import { IsLoggedInGuard } from 'app/shared/guards/isLoggedIn.guard';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ProfilePageComponent },
            { path: 'profile', component: ProfilePageComponent },
            { path: 'info', loadChildren: '../info/user.module#UserModule' },
            { path: '**', component: ProfilePageComponent },
        ]),
    ],
    exports: [RouterModule],
})
export class AccountRoutingModule {}

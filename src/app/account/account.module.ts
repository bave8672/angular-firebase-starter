import { SharedModule } from '../shared/shared.module';
import { AccountRoutes } from './account.routes';
import { InfoPageComponent } from './info/info-page.component';
import { ProfilePageComponent } from './profile/profile-page.component';
import { UpdateEmailComponent } from './update-email/update-email.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UpdatePhotoUrlComponent } from './update-photo-url/update-photo-url.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(AccountRoutes)
    ],
    declarations: [
        InfoPageComponent,
        ProfilePageComponent,
        UpdatePasswordComponent,
        UpdateEmailComponent,
        UpdatePhotoUrlComponent
    ]
})

export class AccountModule {}

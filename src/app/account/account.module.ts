import { TodosModule } from '../todos/todos.module';
import { SendEmailVerificationComponent } from './send-email-verification/send-email-verification.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
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
        TodosModule,
        RouterModule.forChild(AccountRoutes)
    ],
    declarations: [
        InfoPageComponent,
        ProfilePageComponent,
        UpdatePasswordComponent,
        UpdateEmailComponent,
        UpdatePhotoUrlComponent,
        ProfilePictureComponent,
        SendEmailVerificationComponent
    ],
    exports: [
        ProfilePictureComponent
    ]
})

export class AccountModule {}

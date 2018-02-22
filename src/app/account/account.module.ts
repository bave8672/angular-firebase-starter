import { SendEmailVerificationComponent } from './send-email-verification/send-email-verification.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { SharedModule } from '../shared/shared.module';
import { ProfilePageComponent } from './profile/profile-page.component';
import { UpdateEmailComponent } from './update-email/update-email.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UpdatePhotoUrlComponent } from './update-photo-url/update-photo-url.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountRoutingModule } from 'app/account/routing/accountRouting.module';
import { TodosModule } from 'app/account/todos/todos.module';

@NgModule({
    imports: [
        SharedModule,
        TodosModule,
        AccountRoutingModule
    ],
    declarations: [
        ProfilePageComponent,
        UpdatePasswordComponent,
        UpdateEmailComponent,
        UpdatePhotoUrlComponent,
        ProfilePictureComponent,
        SendEmailVerificationComponent
    ],
})

export class AccountModule {}

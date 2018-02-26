import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpdateEmailModule } from 'app/account/user/update-email/updateEmail.module';
import { InfoPageComponent } from 'app/account/user/infoPage/infoPage.component';
import { UserStateModule } from 'app/account/user/state/userState.module';
import { AccountSharedModule } from 'app/account/shared/accountShared.module';
import { UpdatePhotoUrlModule } from 'app/account/user/update-photo-url/updatePhotoUrl.module';
import { UpdatePasswordModule } from 'app/account/user/update-password/updatePassword.module';
import { SendEmailVerificationModule } from 'app/account/user/send-email-verification/sendEmailVerification.module';

@NgModule({
    imports: [
        AccountSharedModule,
        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: InfoPageComponent },
        ]),
        UserStateModule,
        UpdateEmailModule,
        UpdatePhotoUrlModule,
        UpdatePasswordModule,
        SendEmailVerificationModule,
    ],
    declarations: [InfoPageComponent],
})
export class UserModule {}

import { NgModule } from '@angular/core';
import { SendEmailVerificationComponent } from 'app/account/user/send-email-verification/form/sendEmailVerification.component';
import { AccountSharedModule } from 'app/account/shared/accountShared.module';

@NgModule({
    imports: [AccountSharedModule],
    declarations: [SendEmailVerificationComponent],
    exports: [SendEmailVerificationComponent],
})
export class SendEmailVerificationModule {}

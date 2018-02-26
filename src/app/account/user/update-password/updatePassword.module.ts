import { NgModule } from '@angular/core';
import { UpdatePasswordComponent } from 'app/account/user/update-password/form/updatePassword.component';
import { AccountSharedModule } from 'app/account/shared/accountShared.module';

@NgModule({
    imports: [AccountSharedModule],
    declarations: [UpdatePasswordComponent],
    exports: [UpdatePasswordComponent],
})
export class UpdatePasswordModule {}

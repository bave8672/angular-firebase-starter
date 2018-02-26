import { NgModule } from '@angular/core';
import { UpdateEmailComponent } from 'app/account/user/update-email/form/updateEmail.component';
import { SharedModule } from 'app/shared/shared.module';
import { AccountSharedModule } from 'app/account/shared/accountShared.module';

@NgModule({
    imports: [AccountSharedModule],
    declarations: [UpdateEmailComponent],
    exports: [UpdateEmailComponent],
})
export class UpdateEmailModule {}

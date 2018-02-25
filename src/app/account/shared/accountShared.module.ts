import { NgModule } from '@angular/core';
import { ProfilePictureComponent } from 'app/account/shared/profilePicture/profilePicture.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    imports: [SharedModule],
    declarations: [ProfilePictureComponent],
    exports: [ProfilePictureComponent],
})
export class AccountSharedModule {}

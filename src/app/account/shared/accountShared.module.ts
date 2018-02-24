import { NgModule } from '@angular/core/src/metadata/ng_module';
import { ProfilePictureComponent } from 'app/account/shared/profilePicture/profilePicture.component';

@NgModule({
    declarations: [ProfilePictureComponent],
    exports: [ProfilePictureComponent],
})
export class AccountSharedModule {}

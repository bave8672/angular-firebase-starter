import { NgModule } from '@angular/core';
import { UpdatePhotoUrlComponent } from 'app/account/user/update-photo-url/form/updatePhoto-url.component';
import { AccountSharedModule } from 'app/account/shared/accountShared.module';

@NgModule({
    imports: [AccountSharedModule],
    declarations: [UpdatePhotoUrlComponent],
    exports: [UpdatePhotoUrlComponent],
})
export class UpdatePhotoUrlModule {}

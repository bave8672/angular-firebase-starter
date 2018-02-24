import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpdateEmailModule } from 'app/account/user/update-email/updateEmail.module';
import { InfoPageComponent } from 'app/account/user/infoPage/infoPage.component';
import { UserStateModule } from 'app/account/user/state/userState.module';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: InfoPageComponent },
        ]),
        UpdateEmailModule,
        UserStateModule
    ],
    declarations: [InfoPageComponent],
})
export class UserModule {}

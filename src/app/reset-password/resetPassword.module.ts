import { NgModule } from '@angular/core';
import { ResetPasswordComponent } from 'app/reset-password/resetPassword.component';
import { RouterModule } from '@angular/router';
import { ResetPasswordStateModule } from 'app/reset-password/state/resetPasswordState.module';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: ResetPasswordComponent },
        ]),
        ResetPasswordStateModule,
    ],
    declarations: [ResetPasswordComponent],
})
export class ResetPasswordModule {}

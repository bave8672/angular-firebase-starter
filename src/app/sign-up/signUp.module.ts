import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { SignUpComponent } from 'app/sign-up/signUp.component';
import { SignUpStateModule } from 'app/sign-up/state/signUp.state.module';

@NgModule({
    imports: [
        SharedModule,
        SignUpStateModule,
        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: SignUpComponent },
        ]),
    ],
    declarations: [SignUpComponent],
})
export class SignUpModule {}

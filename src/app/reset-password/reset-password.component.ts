import { FormComponent } from '../helpers/form.component';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { emailValid } from '../validators';
import { UserActions } from '../store';

@Component({
    selector: 'app-password-reset',
    templateUrl: './reset-password.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ResetPasswordComponent extends FormComponent implements OnInit {

    static ControlNames = {
        email: 'email'
    };

    controlNames = ResetPasswordComponent.ControlNames;

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            [this.controlNames.email]: ['', emailValid]
        });
    }

    resetPassword() {
        if (this.formGroup.valid) {
            this.state.dispatch(new UserActions.ResetPassword(this.getFormValue<string>(this.controlNames.email)));
        }
    }
}
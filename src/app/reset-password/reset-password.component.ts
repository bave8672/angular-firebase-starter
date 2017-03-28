import { FormComponent } from '../helpers/form.component';
import { UserActions } from '../store';
import { StateService } from '../store/state-service/state.service';
import { emailValid } from '../validators';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-password-reset',
    templateUrl: './reset-password.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ResetPasswordComponent extends FormComponent {

    controlNames = {
        email: 'email'
    };

    formGroup = this.formBuilder.group({
        [this.controlNames.email]: ['', emailValid]
    });

    // formState = this.state.select(s => s.user.resetPassword);

    constructor(
        private formBuilder: FormBuilder,
        private state: StateService
    ) {
        super();
    }

    resetPassword() {
        if (this.formGroup.valid) {
            this.state.dispatch(new UserActions.ResetPassword(this.getFormValue<string>(this.controlNames.email)));
        }
    }
}

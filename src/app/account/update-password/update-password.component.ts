import { FormComponent } from '../../helpers/form.component';
import { Messages } from '../../resources/messages';
import { FormState, UserActions } from '../../store';
import { StateService } from '../../store/state-service/state.service';
import { passwordValid, valuesEqual } from '../../validators';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-account-update-password',
    templateUrl: './update-password.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UpdatePasswordComponent extends FormComponent {

    controlNames = {
        password: 'password',
        newPassword: 'newPassword',
        confirmNewPassword: 'confirmNewPassword'
    };

    formGroup = this.formBuilder.group({
        [this.controlNames.password]: ['', passwordValid],
        [this.controlNames.newPassword]: ['', passwordValid],
        [this.controlNames.confirmNewPassword]: ['', passwordValid]
    }, {
        validator: valuesEqual(
            this.controlNames.newPassword,
            this.controlNames.confirmNewPassword,
            this.controlNames.confirmNewPassword
        )(Messages.Validation.PasswordsNotEqual)
    });

    formState$ = this.state.select(s => s.user.updatePassword);

    constructor(
        private state: StateService,
        private formBuilder: FormBuilder
    ) {
        super();
    }

    updatePassword() {
        this.state.dispatch(new UserActions.UpdatePassword({
            old: this.getFormValue(this.controlNames.password),
            new: this.getFormValue(this.controlNames.newPassword)
        }));
    }
}
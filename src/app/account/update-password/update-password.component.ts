import { UserState } from '../../store/user/user.state';
import { Observable } from 'rxjs/Rx';
import { UserActions, FormState } from '../../store';
import { Messages } from '../../resources/messages';
import { FormComponent } from '../../helpers/form.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { passwordValid, valuesEqual } from '../../validators';

@Component({
    selector: 'account-update-password',
    templateUrl: './update-password.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UpdatePasswordComponent extends FormComponent {

    passwordState$: Observable<FormState>;

    controlNames = {
        password: 'password',
        newPassword: 'newPassword',
        confirmNewPassword: 'confirmNewPassword'
    };

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
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

        this.passwordState$ = this.state.select(s => s.user.updatePassword);
    }

    updatePassword() {
        this.state.dispatch(new UserActions.UpdatePassword({
            old: this.getFormValue(this.controlNames.password),
            new: this.getFormValue(this.controlNames.newPassword)
        }));
    }
}
import { Messages } from '../resources/messages';
import { valuesEqual, emailValid, passwordValid } from '../validators';
import { FormComponent } from '../helpers/form.component';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserActions } from '../store';

@Component({
    templateUrl: './sign-up.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent extends FormComponent implements OnInit {

    static ControlNames = {
        email: 'email',
        password: 'password',
        confirmPassword: 'confirmPassword'
    }

    controlNames = SignUpComponent.ControlNames;

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            [this.controlNames.email]: ['', emailValid],
            [this.controlNames.password]: ['', passwordValid],
            [this.controlNames.confirmPassword]: ['']
        }, {
            validator: valuesEqual(
                SignUpComponent.ControlNames.password,
                SignUpComponent.ControlNames.confirmPassword,
                SignUpComponent.ControlNames.confirmPassword
            )(Messages.Validation.PasswordsNotEqual)
        });
    }

    signUp() {
        if (this.formGroup.valid) {
            this.state.dispatch(new UserActions.SignUp({
                email: this.getFormValue(SignUpComponent.ControlNames.email, ''),
                password: this.getFormValue(SignUpComponent.ControlNames.password, '')
            }));
        }
    }
}
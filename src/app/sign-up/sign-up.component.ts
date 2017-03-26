import { _stateFactory } from '@ngrx/store';
import { FormComponent } from '../helpers/form.component';
import { Messages } from '../resources/messages';
import { SignUpActions, LogInActions } from '../store';
import { StateService } from '../store/state-service/state.service';
import { emailValid, passwordValid, valuesEqual } from '../validators';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    templateUrl: './sign-up.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SignUpComponent extends FormComponent {

    controlNames = {
        email: 'email',
        password: 'password',
        confirmPassword: 'confirmPassword'
    };

    formGroup = this.formBuilder.group({
        [this.controlNames.email]: ['', emailValid],
        [this.controlNames.password]: ['', passwordValid],
        [this.controlNames.confirmPassword]: ['']
    }, {
        validator: valuesEqual(
            this.controlNames.password,
            this.controlNames.confirmPassword,
            this.controlNames.confirmPassword
        )(Messages.Validation.PasswordsNotEqual)
    });

    formState$ = this.state.select(s => s.user).map(u => u.signUp);

    constructor(
        private state: StateService,
        private formBuilder: FormBuilder
    ) {
        super();
    }

    signUp() {
        if (this.formGroup.valid) {
            this.state.dispatch(new SignUpActions.SignUp({
                email: this.getFormValue(this.controlNames.email, ''),
                password: this.getFormValue(this.controlNames.password, '')
            }));
        }
    }

    showLogin() {
        this.state.dispatch(new LogInActions.ShowModal());
    }
}

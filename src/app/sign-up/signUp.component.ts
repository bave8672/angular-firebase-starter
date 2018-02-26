import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LogInActions } from 'app/store/user/logIn/logIn.actions';

import { Messages } from '../resources/messages';
import { Store } from '@ngrx/store';
import { emailValid, passwordValid } from '../validators';
import { AppState } from 'app/store/app.state';
import { TypedFormGroup } from 'app/shared/forms/typedFormGroup';
import { TypedFormControl } from 'app/shared/forms/typedFormControl';
import { SignUpAppState } from 'app/sign-up/state/store.config';
import { SignUpActions } from 'app/sign-up/state/form/signUpForm.actions';
import { valuesEqual } from 'app/validators/valuesEqual';

@Component({
    templateUrl: './signUp.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
    form = new TypedFormGroup(
        {
            email: new TypedFormControl('', emailValid),
            password: new TypedFormControl('', passwordValid),
            confirmPassword: new TypedFormControl(''),
        },
        valuesEqual(
            () => this.form.controls.password,
            () => this.form.controls.confirmPassword
        )()
    );

    formState$ = this.state.select(s => s.signUp.form);

    constructor(private state: Store<SignUpAppState>) {}

    signUp() {
        if (this.form.valid) {
            this.state.dispatch(
                new SignUpActions.SignUp({
                    email: this.form.value.email,
                    password: this.form.value.password,
                })
            );
        }
    }

    showLogin() {
        this.state.dispatch(new LogInActions.ShowModal());
    }
}

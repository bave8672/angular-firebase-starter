import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LogInActions } from 'app/store/user/logIn/logIn.actions';
import { SignUpActions } from 'app/store/user/signUp/signUp.actions';

import { Messages } from '../resources/messages';
import { Store } from '@ngrx/store';
import { emailValid, passwordValid, valuesEqual } from '../validators';
import { AppState } from 'app/store/app.state';
import { TypedFormGroup } from 'app/shared/forms/typedFormGroup';
import { TypedFormControl } from 'app/shared/forms/typedFormControl';

@Component({
    templateUrl: './sign-up.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
    form = new TypedFormGroup({
        email: new TypedFormControl<string>(''),
        password: new TypedFormControl<string>(''),
        confirmPassword: new TypedFormControl<string>(''),
    });

    formState$ = this.state.select(s => s.user.signUp);

    constructor(private state: Store<AppState>) {}

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

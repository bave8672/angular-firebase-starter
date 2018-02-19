import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LogInActions } from 'app/store/user/logIn/logIn.actions';

import { Store } from '@ngrx/store';
import { emailValid, passwordValid } from '../validators';
import { AppState } from 'app/store/app.state';
import { TypedFormGroup } from 'app/shared/forms/typedFormGroup';
import { TypedFormControl } from 'app/shared/forms/typedFormControl';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogInComponent {
    formState$ = this.state.select(s => s.user.logIn);

    formGroup = new TypedFormGroup({
        email: new TypedFormControl('', emailValid),
        password: new TypedFormControl('', passwordValid),
    });

    constructor(private state: Store<AppState>) {}

    hideLogInModal() {
        this.state.dispatch(new LogInActions.HideModal());
    }

    emailPasswordLogin() {
        if (this.formGroup.valid) {
            this.state.dispatch(
                new LogInActions.LogIn({
                    email: this.formGroup.value.email,
                    password: this.formGroup.value.password,
                })
            );
        }
    }
}

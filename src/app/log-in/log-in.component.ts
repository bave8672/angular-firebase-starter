import { FormComponent } from '../helpers/form.component';
import { LogInActions } from '../store';
import { StateService } from '../store/state-service/state.service';
import { emailValid, passwordValid } from '../validators';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthMethods, AuthProviders } from 'angularfire2/auth';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class LogInComponent extends FormComponent {

    controlNames = {
        email: 'email',
        password: 'password',
        rememberMe: 'rememberMe'
    };

    formState$ = this.state.select(s => s.user.logIn);

    formGroup = this.formBuilder.group({
        [this.controlNames.email]: ['', emailValid],
        [this.controlNames.password]: ['', passwordValid],
        [this.controlNames.rememberMe]: [true]
    });

    constructor(
        private state: StateService,
        private formBuilder: FormBuilder
    ) {
        super();
    }

    hideLogInModal() {
        this.state.dispatch(new LogInActions.HideModal());
    }

    facebookLogIn() {
        this.state.dispatch(new LogInActions.LogIn({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup
        }));
    }

    googleLogIn() {
        this.state.dispatch(new LogInActions.LogIn({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup
        }));
    }

    emailPasswordLogin() {
        if (this.formGroup.valid) {
            this.state.dispatch(new LogInActions.LogIn({
                email: this.getFormValue(this.controlNames.email, ''),
                password: this.getFormValue(this.controlNames.password, '')
            }));
        }
    }
}

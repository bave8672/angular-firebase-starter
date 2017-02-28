import { emailValid, passwordValid } from '../validators';
import { NavState } from '../store/nav/navState';
import { UserState } from '../store/user/user.state';
import { FormComponent } from '../helpers/form.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserActions } from '../store';
import { AuthMethods, AuthProviders } from 'angularfire2/auth';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class LogInComponent extends FormComponent {

    static ControlNames = {
        email: 'email',
        password: 'password'
    };

    controlNames = LogInComponent.ControlNames;
    userState$: Observable<UserState>;

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            email: ['', emailValid],
            password: ['', passwordValid]
        });

        this.userState$ = this.state.select(s => s.user);
    }

    hideLogInModal() {
        this.state.dispatch(new UserActions.HideLogInModal());
    }

    facebookLogIn() {
        this.state.dispatch(new UserActions.LogIn({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup
        }));
    }

    googleLogIn() {
        this.state.dispatch(new UserActions.LogIn({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup
        }));
    }

    emailPasswordLogIn() {
        if (this.formGroup.valid) {
            this.state.dispatch(new UserActions.LogIn({
                email: this.getFormValue(LogInComponent.ControlNames.email, ''),
                password: this.getFormValue(LogInComponent.ControlNames.password, '')
            }));
        }
    }
}

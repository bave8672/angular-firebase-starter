import { Observable } from 'rxjs/Rx';
import { UserState } from '../store/user/user.state';
import { AuthMethods, AuthProviders } from 'angularfire2/auth';
import { FormComponent } from '../helpers/form.component';
import { FormGroup } from '@angular/forms';
import { StatefulClass } from '../helpers/statefulClass';
import { Component, OnInit } from '@angular/core';
import { UserActions } from '../store';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent extends FormComponent implements OnInit {

    static controlNames = {
        email: 'email',
        password: 'password'
    };

    user$: Observable<UserState>;

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            email: [''],
            password: ['']
        });

        this.user$ = this.state.select(s => s.user);
    }

    showLogInModal() {
        this.state.dispatch(new UserActions.ShowLogInModal());
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
                email: this.getFormValue<string>(NavComponent.controlNames.email),
                password: this.getFormValue<string>(NavComponent.controlNames.password)
            }));
        }
    }

    logOut() {
        this.state.dispatch(new UserActions.LogOut());
    }
}

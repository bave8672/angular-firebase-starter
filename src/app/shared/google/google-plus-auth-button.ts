import { StateService } from '../../store/state-service/state.service';
import { Input } from '@angular/core/core';
import { Component } from '@angular/core';
import { LogInActions} from '../../store';
import { AuthMethods, AuthProviders } from 'angularfire2/auth';

@Component({
    selector: 'app-google-plus-auth-button',
    template: `
        <a class="btn btn-lg btn-block btn-social btn-twitter" (click)="login()">
            <span class="fa fa-google"></span>
            Sign in with Google
        </a>`
})

export class GooglePlusAuthButtonComponent {

    constructor(private state: StateService) {}

    login() {
        this.state.dispatch(new LogInActions.LogIn({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup
        }));
    }
}

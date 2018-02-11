import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

import { LogInActions } from '../../store';
import { StateService } from '../../store/state-service/state.service';

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
            provider: new firebase.auth.GoogleAuthProvider(),
            method: AuthMethods.Popup
        }));
    }
}

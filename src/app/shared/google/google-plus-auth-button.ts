import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

import { StateService } from '../../store/state-service/state.service';
import { LogInActions } from 'app/store/user/logIn/logIn.actions';

@Component({
    selector: 'app-google-plus-auth-button',
    template: `
        <a class="btn btn-lg btn-block btn-social btn-twitter" (click)="login()">
            <span class="fa fa-google"></span>
            Sign in with Google
        </a>`,
})
export class GooglePlusAuthButtonComponent {
    constructor(private state: StateService) {}

    login() {
        this.state.dispatch(
            new LogInActions.LogIn(new firebase.auth.GoogleAuthProvider())
        );
    }
}

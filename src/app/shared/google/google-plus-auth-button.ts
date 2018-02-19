import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

import { Store } from '@ngrx/store';
import { LogInActions } from 'app/store/user/logIn/logIn.actions';
import { AccountAppState } from 'app/account/state/store.config';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-google-plus-auth-button',
    template: `
        <a class="btn btn-lg btn-block btn-social btn-twitter" (click)="login()">
            <span class="fa fa-google"></span>
            Sign in with Google
        </a>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GooglePlusAuthButtonComponent {
    constructor(private state: Store<AccountAppState>) {}

    login() {
        this.state.dispatch(
            new LogInActions.LogIn(new firebase.auth.GoogleAuthProvider())
        );
    }
}

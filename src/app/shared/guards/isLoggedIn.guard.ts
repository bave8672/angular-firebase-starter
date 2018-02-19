import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

import { LogInActions } from 'app/store/user/logIn/logIn.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'app/store/app.state';

@Injectable()
export class IsLoggedInGuard implements CanActivate, CanActivateChild {
    constructor(
        private auth: AngularFireAuth,
        private state: Store<AppState>
    ) {}

    canActivate() {
        return this.redirectIfNotLoggedIn();
    }

    canActivateChild() {
        return this.redirectIfNotLoggedIn();
    }

    redirectIfNotLoggedIn() {
        return this.isLoggedIn().map(isAuth => {
            if (!isAuth) {
                this.state.dispatch(new LogInActions.ShowModal());
            }
            return isAuth;
        });
    }

    continueIfLoggedIn() {
        return this.auth.authState.filter(a => !!a);
    }

    isLoggedIn() {
        return this.auth.authState.map(a => !!a);
    }
}

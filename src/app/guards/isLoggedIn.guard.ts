import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

import { StateService } from '../store/state-service/state.service';
import { LogInActions } from 'app/store/user/logIn/logIn.actions';

@Injectable()
export class IsLoggedInGuard implements CanActivate, CanActivateChild {
    constructor(private auth: AngularFireAuth, private state: StateService) {}

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

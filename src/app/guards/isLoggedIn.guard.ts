import { LogInActions } from '../store';
import { StateService } from '../store/state-service/state.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Injectable()
export class IsLoggedInGuard implements CanActivate, CanActivateChild {

    constructor(
        private firebase: AngularFire,
        private state: StateService
    ) {}

    canActivate() {
        return this.redirectIfNotLoggedIn();
    }

    canActivateChild() {
        return this.redirectIfNotLoggedIn();
    }

    redirectIfNotLoggedIn() {
        return this.isLoggedIn()
            .map(isAuth => {
                if (!isAuth) {
                    this.state.dispatch(new LogInActions.ShowModal());
                }
                return isAuth;
        });
    }

    continueIfLoggedIn() {
        return this.firebase.auth.filter(a => !!a.uid);
    }

    isLoggedIn() {
        return this.firebase.auth.map(a => !!a.uid);
    }
}

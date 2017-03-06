import { UserActions } from '../store';
import { StateService } from '../store/state-service/state.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Injectable()
export class IsLoggedInGuard implements CanActivate {

    constructor(
        private firebase: AngularFire,
        private state: StateService
    ) {}

    canActivate() {
        return this.firebase.auth.map(a => {
            if (a.uid != null) {
                return true;
            }
            this.state.dispatch(new UserActions.ShowLogInModal());
            return false;
        })
    }
}

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { AuthProviders } from 'angularfire2/auth';

@Injectable()
export class IsPasswordUserGuard implements CanActivate {

    constructor(
        private firebase: AngularFire,
    ) {}

    canActivate() {
        return this.firebase.auth.getAuth().provider === AuthProviders.Password;
    }
}

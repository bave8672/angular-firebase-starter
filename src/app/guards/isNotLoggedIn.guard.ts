import { CanActivate, CanActivateChild } from '@angular/router';
import { IsLoggedInGuard } from './isLoggedIn.guard';
import { Injectable } from '@angular/core';

@Injectable()
export class IsNotLoggedInGuard implements CanActivate, CanActivateChild {

    constructor(
        private isLoggedInGuard: IsLoggedInGuard
    ) {}

    canActivate() {
        return this.isLoggedInGuard.isLoggedIn().map(a => !a);
    }

    canActivateChild() {
        return this.isLoggedInGuard.isLoggedIn().map(a => !a);
    }
}

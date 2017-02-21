import { StateService } from '../store/state-service/state.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class IsLoggedInGuard implements CanActivate {

    constructor(private state: StateService) {}

    canActivate() {
        return this.state.select(s => s.user.isLoggedIn);
    }
}

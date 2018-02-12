import { Component } from '@angular/core';
import { NavActions } from 'app/store/nav/nav.actions';
import { LogInActions } from 'app/store/user/logIn/logIn.actions';

import { IsLoggedInGuard } from '../guards/isLoggedIn.guard';
import { StateService } from '../store/state-service/state.service';

declare const window: Window;

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
})
export class NavComponent {
    userState$ = this.state.select(s => s.user);
    navState$ = this.state.select(s => s.nav);
    isLoggedIn$ = this.isLoggedInGuard.isLoggedIn();
    window = window;

    constructor(
        private state: StateService,
        private isLoggedInGuard: IsLoggedInGuard
    ) {}

    toggleNavigation() {
        this.state.dispatch(new NavActions.ToggleNavigation());
    }

    showLogInModal() {
        this.state.dispatch(new LogInActions.ShowModal());
    }

    logOut() {
        this.state.dispatch(new LogInActions.LogOut());
    }
}

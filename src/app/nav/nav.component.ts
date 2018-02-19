import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavActions } from 'app/store/nav/nav.actions';
import { LogInActions } from 'app/store/user/logIn/logIn.actions';

import { Store } from '@ngrx/store';
import { IsLoggedInGuard } from 'app/shared/guards/isLoggedIn.guard';
import { AppState } from 'app/store/app.state';

declare const window: Window;

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
    userState$ = this.state.select(s => s.user);
    navState$ = this.state.select(s => s.nav);
    isLoggedIn$ = this.isLoggedInGuard.isLoggedIn();
    window = window;

    constructor(
        private state: Store<AppState>,
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

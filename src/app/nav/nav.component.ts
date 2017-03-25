import { IsLoggedInGuard } from '../guards/isLoggedIn.guard';
import { NavActions, UserActions, LogInActions } from '../store';
import { NavState } from '../store/nav/navState';
import { StateService } from '../store/state-service/state.service';
import { UserState } from '../store/user/user.state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

declare const window: Window;

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html'
})
export class NavComponent{

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
        this.state.dispatch(new UserActions.LogOut());
    }
}

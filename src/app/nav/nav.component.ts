import { NavActions, UserActions, LogInActions } from '../store';
import { NavState } from '../store/nav/navState';
import { StateService } from '../store/state-service/state.service';
import { UserState } from '../store/user/user.state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

declare const window: Window;

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    userState$: Observable<UserState>;
    navState$: Observable<NavState>;
    window = window;

    constructor(
        private state: StateService,
    ) {}

    ngOnInit() {
        this.userState$ = this.state.select(s => s.user);
        this.navState$ = this.state.select(s => s.nav);
    }

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

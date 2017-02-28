import { NavState } from '../store/nav/navState';
import { Observable } from 'rxjs/Rx';
import { UserState } from '../store/user/user.state';
import { AuthMethods, AuthProviders } from 'angularfire2/auth';
import { FormComponent } from '../helpers/form.component';
import { FormGroup } from '@angular/forms';
import { StatefulClass } from '../helpers/statefulClass';
import { Component, OnInit } from '@angular/core';
import { UserActions, NavActions } from '../store';

declare let window: Window;

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent extends StatefulClass implements OnInit {

    userState$: Observable<UserState>;
    navState$: Observable<NavState>;
    window = window;

    ngOnInit() {
        this.userState$ = this.state.select(s => s.user);
        this.navState$ = this.state.select(s => s.nav);
    }

    toggleNavigation() {
        this.state.dispatch(new NavActions.ToggleNavigation());
    }

    showLogInModal() {
        this.state.dispatch(new UserActions.ShowLogInModal());
    }

    logOut() {
        this.state.dispatch(new UserActions.LogOut());
    }
}

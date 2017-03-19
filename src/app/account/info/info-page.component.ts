import { UserActions, UserSelectors } from '../../store';
import { StateService } from '../../store/state-service/state.service';
import { UserState } from '../../store/user/user.state';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-account-info-page',
    templateUrl: './info-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class InfoPageComponent implements OnInit {

    user$: Observable<firebase.User>;
    isPasswordUser$: Observable<boolean>;
    userState$: Observable<UserState>;

    constructor(
        protected state: StateService,
        protected firebase: AngularFire
    ) {
    }

    ngOnInit() {
        this.user$ = this.firebase.auth.map(auth => auth ? auth.auth : null);
        this.isPasswordUser$ = UserSelectors.IsPasswordUser(this.firebase);
        this.userState$ = this.state.select(s => s.user);
    }

    toggleUpdatePhotoUrl() {
        this.state.dispatch(new UserActions.ToggleUpdatePhotoUrl());
    }

    toggleUpdatePasswordForm() {
        this.state.dispatch(new UserActions.ToggleUpdatePasswordForm());
    }

    toggleUpdateEmailForm() {
        this.state.dispatch(new UserActions.ToggleUpdateEmailForm());
    }

    resendEmailVerification() {
        this.state.dispatch(new UserActions.SendEmailVerification());
    }
}

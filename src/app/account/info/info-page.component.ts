import { UserState } from '../../store/user/user.state';
import { UserSelectors, UserActions } from '../../store';
import { StatefulClass } from '../../helpers/statefulClass';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'account-info-page',
    templateUrl: './info-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class InfoPageComponent extends StatefulClass implements OnInit {

    user$: Observable<firebase.User>;
    isPasswordUser$: Observable<boolean>;
    userState$: Observable<UserState>;

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
}

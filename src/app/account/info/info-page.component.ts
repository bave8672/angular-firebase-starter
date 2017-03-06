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
    ui$: Observable<UserState>;

    ngOnInit() {
        this.user$ = this.firebase.auth.map(auth => auth.auth);
        this.isPasswordUser$ = UserSelectors.IsPasswordUser(this.firebase);
        this.ui$ = this.state.select(s => s.user);
    }

    toggleUpdatePasswordForm() {
        this.state.dispatch(new UserActions.ToggleUpdatePasswordResetForm());
    }
}

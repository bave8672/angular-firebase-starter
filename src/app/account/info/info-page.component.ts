import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ResendEmailVerificationActions } from 'app/store/user/resendEmailVerification/resendEmailVerification.actions';
import { UpdateEmailActions } from 'app/store/user/updateEmail/updateEmail.actions';
import { UpdatePasswordActions } from 'app/store/user/updatePassword/updatePassword.actions';
import { UpdatePhotoUrlActions } from 'app/store/user/updatePhotoUrl/updatePhotoUrl.actions';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { UserState } from '../../store/user/user.state';
import { AccountAppState } from 'app/account/state/store.config';

@Component({
    selector: 'app-account-info-page',
    templateUrl: './info-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPageComponent {
    user$ = this.auth.authState;
    userState$: Observable<UserState> = this.state.select(s => s.user);

    constructor(
        protected state: Store<AccountAppState>,
        protected auth: AngularFireAuth
    ) {}

    toggleUpdatePhotoUrl() {
        this.state.dispatch(new UpdatePhotoUrlActions.ToggleForm());
    }

    toggleUpdatePasswordForm() {
        this.state.dispatch(new UpdatePasswordActions.ToggleForm());
    }

    toggleUpdateEmailForm() {
        this.state.dispatch(new UpdateEmailActions.ToggleForm());
    }

    resendEmailVerification() {
        this.state.dispatch(new ResendEmailVerificationActions.Resend());
    }
}

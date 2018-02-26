import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { AccountAppState } from 'app/account/state/store.config';
import { UserState } from 'app/store/user/user.state';
import { UpdatePhotoUrlActions } from 'app/account/user/update-photo-url/state/updatePhotoUrl.actions';
import { UpdatePasswordActions } from 'app/account/user/update-password/state/updatePassword.actions';
import { UpdateEmailActions } from 'app/account/user/update-email/state/updateEmail.actions';
import { ResendEmailVerificationActions } from 'app/account/user/send-email-verification/state/resendEmailVerification.actions';

@Component({
    selector: 'app-account-info-page',
    templateUrl: './infoPage.component.html',
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

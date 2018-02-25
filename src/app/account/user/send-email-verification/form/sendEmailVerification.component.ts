import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/store/app.state';
import { AccountAppState } from 'app/account/state/store.config';
import { ResendEmailVerificationActions } from 'app/account/user/send-email-verification/state/resendEmailVerification.actions';
import { UserAppState } from 'app/account/user/state/store.config';

@Component({
    selector: 'app-account-send-email-verification',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './sendEmailVerification.component.html',
})
export class SendEmailVerificationComponent {
    formState$ = this.state.select(s => s.user.sendEmailVerification);

    constructor(private state: Store<UserAppState>) {}

    send() {
        this.state.dispatch(new ResendEmailVerificationActions.Resend());
    }
}

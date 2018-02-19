import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ResendEmailVerificationActions } from '../../store/user/resendEmailVerification/resendEmailVerification.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'app/store/app.state';
import { AccountAppState } from 'app/account/state/store.config';

@Component({
    selector: 'app-account-send-email-verification',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './send-email-verification.component.html',
})
export class SendEmailVerificationComponent {
    formState$ = this.state.select(s => s.user.sendEmailVerification);

    constructor(private state: Store<AccountAppState>) {}

    send() {
        this.state.dispatch(new ResendEmailVerificationActions.Resend());
    }
}

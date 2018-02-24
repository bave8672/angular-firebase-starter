import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/store/app.state';
import { AccountAppState } from 'app/account/state/store.config';
import { ResendEmailVerificationActions } from 'app/account/send-email-verification/state/resendEmailVerification.actions';

@Component({
    selector: 'app-account-send-email-verification',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './sendEmailVerification.component.html',
})
export class SendEmailVerificationComponent {
    formState$ = this.state.select(s => s.account.resendEmailVerification);

    constructor(private state: Store<AccountAppState>) {}

    send() {
        this.state.dispatch(new ResendEmailVerificationActions.Resend());
    }
}

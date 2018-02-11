import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FormComponent } from '../../helpers/form.component';
import { StateService } from '../../store/state-service/state.service';
import { ResendEmailVerificationActions } from '../../store/user/resendEmailVerification/resendEmailVerification.actions';

@Component({
    selector: 'app-account-send-email-verification',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './send-email-verification.component.html',
})
export class SendEmailVerificationComponent extends FormComponent {
    formState$ = this.state.select(s => s.user.sendEmailVerification);

    constructor(private state: StateService) {
        super();
    }

    send() {
        this.state.dispatch(new ResendEmailVerificationActions.Resend());
    }
}

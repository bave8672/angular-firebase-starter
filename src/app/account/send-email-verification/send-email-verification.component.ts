import { UserActions } from '../../store';
import { FormComponent } from '../../helpers/form.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'account-send-email-verification',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './send-email-verification.component.html'
})

export class SendEmailVerificationComponent extends FormComponent {

    formState = this.state.select(s => s.user.sendEmailVerification);

    send() {
        this.state.dispatch(new UserActions.SendEmailVerification());
    }
}

import { FormComponent } from '../../helpers/form.component';
import { UserActions } from '../../store';
import { StateService } from '../../store/state-service/state.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-account-send-email-verification',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './send-email-verification.component.html'
})

export class SendEmailVerificationComponent extends FormComponent {

    formState$ = this.state.select(s => s.user.sendEmailVerification);

    constructor(
        private state: StateService
    ) {
        super();
    }

    send() {
        this.state.dispatch(new UserActions.SendEmailVerification());
    }
}

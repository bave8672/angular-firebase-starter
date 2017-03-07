import { FormState } from '../../store/user/user.state';
import { Observable } from 'rxjs/Rx';
import { emailValid } from '../../validators';
import { FormComponent } from '../../helpers/form.component';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserActions } from '../../store';

@Component({
    selector: 'account-update-email',
    templateUrl: './update-email.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UpdateEmailComponent extends FormComponent implements OnInit {

    controlNames = {
        newEmail: 'newEmail'
    };

    emailState$: Observable<FormState>;

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            [this.controlNames.newEmail]: ['', emailValid]
        });

        this.emailState$ = this.state.select(s => s.user.updateEmail);
    }

    updateEmail() {
        this.state.dispatch(new UserActions.UpdateEmail(this.getFormValue(this.controlNames.newEmail)));
    }
}
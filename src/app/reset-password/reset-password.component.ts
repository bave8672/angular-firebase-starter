import { Store } from '@ngrx/store';
import { emailValid } from '../validators';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccountAppState } from 'app/account/state/store.config';
import { TypedFormGroup } from 'app/shared/forms/typedFormGroup';
import { TypedFormControl } from 'app/shared/forms/typedFormControl';

@Component({
    selector: 'app-password-reset',
    templateUrl: './reset-password.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordComponent {
    formGroup = new TypedFormGroup({
        email: new TypedFormControl(''),
    });

    // formState = this.state.select(s => s.user.resetPassword);

    constructor() /* private state: Store<AccountAppState> */
    {}

    resetPassword() {
        if (this.formGroup.valid) {
            // this.state.dispatch(new UserActions.ResetPassword(this.getFormValue<string>(this.controlNames.email)));
        }
    }
}

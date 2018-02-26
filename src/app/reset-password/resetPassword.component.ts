import { Store } from '@ngrx/store';
import { emailValid } from '../validators';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccountAppState } from 'app/account/state/store.config';
import { TypedFormGroup } from 'app/shared/forms/typedFormGroup';
import { TypedFormControl } from 'app/shared/forms/typedFormControl';
import { ResetPasswordAppState } from 'app/reset-password/state/store.config';
import { ResetPasswordFormActions } from 'app/reset-password/state/form/resetPasswordForm.actions';

@Component({
    selector: 'app-password-reset',
    templateUrl: './resetPassword.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordComponent {
    formGroup = new TypedFormGroup({
        email: new TypedFormControl('', emailValid),
    });

    formState$ = this.state.select(s => s.resetPassword.form);

    constructor(private state: Store<ResetPasswordAppState>) {}

    resetPassword() {
        if (this.formGroup.valid) {
            this.state.dispatch(
                new ResetPasswordFormActions.Reset(this.formGroup.value.email)
            );
        }
    }
}

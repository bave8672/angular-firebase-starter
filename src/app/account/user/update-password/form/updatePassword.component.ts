import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UpdatePasswordActions } from 'app/store/user/updatePassword/updatePassword.actions';

import { Store } from '@ngrx/store';
import { AccountAppState } from 'app/account/state/store.config';
import { TypedFormControl } from 'app/shared/forms/typedFormControl';
import { TypedFormGroup } from 'app/shared/forms/typedFormGroup';
import { UnequalValidationError } from 'app/validators/valuesEqual';
import { passwordValid, valuesEqual } from 'app/validators';

interface UpdatePasswordForm {
    password: string;
    newPassword: string;
    confirmNewPassword: string;
}

@Component({
    selector: 'app-account-update-password',
    templateUrl: './updatePassword.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdatePasswordComponent {
    formGroup: TypedFormGroup<UpdatePasswordForm> = new TypedFormGroup<
        UpdatePasswordForm
    >(
        {
            password: new TypedFormControl(''),
            newPassword: new TypedFormControl('', passwordValid),
            confirmNewPassword: new TypedFormControl(''),
        },
        valuesEqual(
            () => this.formGroup.controls.newPassword,
            () => this.formGroup.controls.confirmNewPassword
        )()
    );

    formState$ = this.state.select(s => s.user.updatePassword);

    constructor(private state: Store<AccountAppState>) {}

    updatePassword() {
        this.state.dispatch(
            new UpdatePasswordActions.Update({
                old: this.formGroup.value.password,
                new: this.formGroup.value.newPassword,
            })
        );
    }
}

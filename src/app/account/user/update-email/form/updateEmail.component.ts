import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AccountAppState } from 'app/account/state/store.config';
import { TypedFormGroup } from 'app/shared/forms/typedFormGroup';
import { TypedFormControl } from 'app/shared/forms/typedFormControl';
import { emailValid } from 'app/validators';
import { UserAppState } from 'app/account/user/state/store.config';
import { UpdateEmailActions } from 'app/account/user/update-email/state/updateEmail.actions';

@Component({
    selector: 'app-account-update-email',
    templateUrl: './updateEmail.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateEmailComponent {
    formGroup = new TypedFormGroup({
        newEmail: new TypedFormControl('', emailValid),
    });

    formState$ = this.state.select(s => s.user.updateEmail);

    constructor(private state: Store<UserAppState>) {}

    updateEmail() {
        this.state.dispatch(
            new UpdateEmailActions.Update(this.formGroup.value.newEmail)
        );
    }
}

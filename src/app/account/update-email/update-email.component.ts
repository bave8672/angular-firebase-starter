import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UpdateEmailActions } from 'app/store/user/updateEmail/updateEmail.actions';

import { Store } from '@ngrx/store';
import { emailValid } from '../../validators';
import { AccountAppState } from 'app/account/state/store.config';
import { TypedFormGroup } from 'app/shared/forms/typedFormGroup';
import { TypedFormControl } from 'app/shared/forms/typedFormControl';

@Component({
    selector: 'app-account-update-email',
    templateUrl: './update-email.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateEmailComponent {
    formGroup = new TypedFormGroup({
        newEmail: new TypedFormControl('', emailValid),
    });

    formState$ = this.state.select(s => s.user.updateEmail);

    constructor(private state: Store<AccountAppState>) {}

    updateEmail() {
        this.state.dispatch(
            new UpdateEmailActions.Update(this.formGroup.value.newEmail)
        );
    }
}

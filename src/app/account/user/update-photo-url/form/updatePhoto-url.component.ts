import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AccountAppState } from 'app/account/state/store.config';
import { TypedFormGroup } from 'app/shared/forms/typedFormGroup';
import { TypedFormControl } from 'app/shared/forms/typedFormControl';
import { validUrl } from 'app/validators/validUrl';
import { UpdatePhotoUrlActions } from 'app/account/user/update-photo-url/state/updatePhotoUrl.actions';
import { UserAppState } from 'app/account/user/state/store.config';

@Component({
    selector: 'app-account-update-photo-url',
    templateUrl: './updatePhoto-url.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdatePhotoUrlComponent {
    formGroup = new TypedFormGroup({
        newPhotoUrl: new TypedFormControl<string>(
            '',
            validUrl('Please enter a vlaid URL')
        ),
    });

    formState$ = this.state.select(s => s.accountUser.updatePhotoUrl);

    constructor(private state: Store<UserAppState>) {}

    onSubmitPhoto() {
        this.state.dispatch(new UpdatePhotoUrlActions.Update(this.formGroup.value.newPhotoUrl));
    }
}

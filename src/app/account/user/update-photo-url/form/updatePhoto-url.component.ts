import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UpdatePhotoUrlActions } from 'app/store/user/updatePhotoUrl/updatePhotoUrl.actions';

import { Store } from '@ngrx/store';
import { AccountAppState } from 'app/account/state/store.config';
import { TypedFormGroup } from 'app/shared/forms/typedFormGroup';
import { TypedFormControl } from 'app/shared/forms/typedFormControl';
import { validUrl } from 'app/validators/validUrl';

@Component({
    selector: 'app-account-update-photo-url',
    templateUrl: './updatePhoto-url.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdatePhotoUrlComponent {
    newPhotoUrl = '';

    formGroup = new TypedFormGroup({
        newPhotoUrl: new TypedFormControl<string>(
            '',
            validUrl('Please enter a vlaid URL')
        ),
    });

    formState$ = this.state.select(s => s.user.updatePhotoUrl);

    constructor(private state: Store<AccountAppState>) {}

    onSubmitPhoto() {
        this.state.dispatch(new UpdatePhotoUrlActions.Update(this.newPhotoUrl));
    }
}

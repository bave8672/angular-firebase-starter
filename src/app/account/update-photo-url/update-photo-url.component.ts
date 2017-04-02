import { FormBuilder } from '@angular/forms';
import { StateService } from '../../store/state-service/state.service';
import { FormComponent } from '../../helpers/form.component';
import { UpdatePhotoUrlActions, FormState } from '../../store';
import { validUrl } from '../../validators/validUrl';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-account-update-photo-url',
    templateUrl: './update-photo-url.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UpdatePhotoUrlComponent extends FormComponent {

    controlNames = {
        newPhotoUrl: 'newPhotoUrl'
    };

    newPhotoUrl = '';

    formGroup = this.formBuilder.group({
        [this.controlNames.newPhotoUrl]: ['', validUrl]
    });

    formState$ = this.state.select(s => s.user.updatePhotoUrl);

    constructor(
        private state: StateService,
        private formBuilder: FormBuilder
    ) {
        super();
    }

    onSubmitPhoto() {
        this.state.dispatch(new UpdatePhotoUrlActions.Update(this.newPhotoUrl));
    }
}

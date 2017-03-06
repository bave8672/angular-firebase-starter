import { validUrl } from '../../validators/validUrl';
import { FormComponent } from '../../helpers/form.component';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserActions } from '../../store';

@Component({
    selector: 'account-update-photo-url',
    templateUrl: './update-photo-url.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UpdatePhotoUrlComponent extends FormComponent implements OnInit {

    controlNames = {
        newPhotoUrl: 'newPhotoUrl'
    };

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            [this.controlNames.newPhotoUrl]: ['', validUrl]
        });

        this.formGroup.controls[this.controlNames.newPhotoUrl].valueChanges
            .subscribe(this.onUrlChanged);
    }

    onUrlChanged(url: string) {
        this.state.dispatch(new UserActions.TryUpdatePhotoUrl(this.getFormValue(this.controlNames.newPhotoUrl)));
    }
}

import { Observable } from 'rxjs/Rx';
import { FormState } from '../../store/user/user.state';
import { SubscriberComponent } from '../../helpers/subscriber.component';
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

    photoState$: Observable<FormState>;
    newPhotoUrl = '';

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            [this.controlNames.newPhotoUrl]: ['', validUrl]
        });
        this.photoState$ = this.state.select(s => s.user.updatePhotoUrl);
    }

    onSubmitPhoto() {
        this.state.dispatch(new UserActions.UpdatePhotoUrl(this.newPhotoUrl));
    }
}

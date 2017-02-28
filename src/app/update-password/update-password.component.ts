import { FormComponent } from '../helpers/form.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-update-password',
    templateUrl: './update-password.component.ts',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UpdatePasswordComponent extends FormComponent {

}
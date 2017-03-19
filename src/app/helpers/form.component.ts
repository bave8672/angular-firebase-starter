import { Observable } from 'rxjs/Rx';
import { FormState } from '../store/formState';
import { StateService } from '../store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export abstract class FormComponent {

    static readonly ControlNames: { [name: string]: string; } | undefined;
    protected readonly controlNames: { [name: string]: string; };
    formGroup: FormGroup;
    formState$: Observable<FormState>;

    protected getFormValue<T>(controlName: string, fallback?: T) {
        if (this.formGroup && this.formGroup.controls[controlName] &&
            this.formGroup.controls[controlName].value) {
            return this.formGroup.controls[controlName].value;
        }
        if (fallback != null) {
            return fallback;
        }
    }
}

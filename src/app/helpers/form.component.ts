import { FormState } from '../store/formState';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

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

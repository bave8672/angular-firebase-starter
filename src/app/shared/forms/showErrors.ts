import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

export function showErrors(control: AbstractControl) {
    if ((control as FormGroup | FormArray).controls) {
        // tslint:disable-next-line:forin
        for (const name in (control as FormGroup | FormArray).controls) {
            showErrors((control as FormGroup).controls[name]);
        }
    }
    control.markAsTouched({ onlySelf: true });
    control.updateValueAndValidity({ onlySelf: true });
}

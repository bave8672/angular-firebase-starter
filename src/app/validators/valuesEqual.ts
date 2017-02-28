import { FormGroup, ValidatorFn } from '@angular/forms';

export const valuesEqual = (a: string, b: string, attachTo: string | null = null) =>
    (message: string): ValidatorFn =>
        (fg: FormGroup) => {
            if (fg.controls[a] &&
            fg.controls[b] &&
            fg.controls[a].value !== fg.controls[b].value) {
                const error = { [`${a}And${b}areEqual`]: message };
                if (attachTo) {
                    fg.controls[attachTo].setErrors(error);
                    return {};
                }
                return error;
            }
            return {};
        }

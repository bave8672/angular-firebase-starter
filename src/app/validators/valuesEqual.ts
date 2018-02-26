import { FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import { TypedValidatorFn } from 'app/shared/forms/typedValidatorFn';

export interface UnequalValidationError {
    unequal: string;
}

export const valuesEqual = <T>(
    a: () => AbstractControl,
    b: () => AbstractControl,
    attachTo?: () => AbstractControl
) => (
    message: string = 'Values must be the same'
): TypedValidatorFn<T, UnequalValidationError> => () => {
    try {
        if (a().value !== b().value) {
            const error: UnequalValidationError = { unequal: message };
            (attachTo || b)().setErrors(error);
        }
    } catch (e) {}
    return null;
};

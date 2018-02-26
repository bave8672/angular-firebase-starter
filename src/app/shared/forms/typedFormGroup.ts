import { scrollToElement } from '../utils/scrollToElement';
import {
    AbstractControl,
    AsyncValidatorFn,
    FormGroup,
    ValidatorFn,
} from '@angular/forms';

import { showErrors } from './showErrors';
import { TypedAbstractControl } from 'app/shared/forms/typedAbstractControl';
import { ValidationErrors } from '@angular/forms';
import {
    TypedValidatorFn,
    TypedAsyncValidatorFn,
} from 'app/shared/forms/typedValidatorFn';
import { TypedFormControl } from 'app/shared/forms/typedFormControl';
import { MapLike } from 'typescript';

export class TypedFormGroup<
    T extends MapLike<any>,
    U extends ValidationErrors = any
> extends FormGroup implements TypedAbstractControl<T, U> {
    readonly value: T;
    readonly validator: TypedValidatorFn<T, U>;
    readonly asyncValidator: TypedAsyncValidatorFn<T, U>;
    readonly errors: U;
    constructor(
        public readonly controls: {
            [key in keyof T]: TypedFormControl<T[key]>
        },
        validator?: TypedValidatorFn<T, U> | TypedValidatorFn<T, Partial<U>>[],
        asyncValidator?:
            | TypedAsyncValidatorFn<T, U>
            | TypedAsyncValidatorFn<T, Partial<U>>[]
    ) {
        super(controls, validator, asyncValidator);
    }

    showErrors() {
        showErrors(this);
        setTimeout(() =>
            scrollToElement(
                '[formControl].ng-invalid.ng-touched,[formControlName].ng-invalid.ng-touched'
            )
        );
        return this.valid;
    }
}

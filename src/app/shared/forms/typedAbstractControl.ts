import { AbstractControl } from '@angular/forms';
import {
    TypedValidatorFn,
    TypedAsyncValidatorFn,
} from 'app/shared/forms/typedValidatorFn';
import { TypedFormGroup } from 'app/shared/forms/typedFormGroup';
import { TypedFormArray } from 'app/shared/forms/typedFormArray';
import { ValidationErrors } from '@angular/forms/src/directives/validators';
import { Observable } from 'rxjs/Observable';

export interface TypedAbstractControl<
    TValue,
    TErrors extends ValidationErrors = any
> extends AbstractControl {
    validator: TypedValidatorFn<TValue, TErrors> | null;
    asyncValidator: TypedAsyncValidatorFn<TValue, TErrors> | null;
    errors: TErrors;
    readonly value: TValue;
    readonly valueChanges: Observable<TValue>;
    setValidators(
        newValidator:
            | TypedValidatorFn<TValue, TErrors>
            | Array<TypedValidatorFn<TValue, Partial<TErrors>>>
            | null
    ): void;
    setAsyncValidators(
        newValidator:
            | TypedAsyncValidatorFn<TValue, TErrors>
            | Array<TypedAsyncValidatorFn<TValue, Partial<TErrors>>>
            | null
    ): void;
    setValue(value: TValue, options?: Object): void;
    patchValue(value: TValue, options?: Object): void;
    reset(value?: TValue, options?: Object): void;
}

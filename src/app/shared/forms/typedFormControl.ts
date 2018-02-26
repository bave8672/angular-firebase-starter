import { FormControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { TypedAbstractControl } from 'app/shared/forms/typedAbstractControl';
import {
    TypedValidatorFn,
    TypedAsyncValidatorFn,
} from 'app/shared/forms/typedValidatorFn';
import { ValidationErrors } from '@angular/forms';

export class TypedFormControl<
    T,
    U extends ValidationErrors = any
> extends FormControl implements TypedAbstractControl<T, U> {
    readonly value: T;
    readonly validator: TypedValidatorFn<T, U>;
    readonly asyncValidator: TypedAsyncValidatorFn<T, U>;
    readonly errors: U;

    constructor(
        formState?: T | { value?: T; disabled?: boolean },
        validator?:
            | TypedValidatorFn<T, U>
            | Array<TypedValidatorFn<T, Partial<U>>>,
        asyncValidator?:
            | TypedAsyncValidatorFn<T, U>
            | Array<TypedAsyncValidatorFn<T, Partial<U>>>
    ) {
        super(formState, validator, asyncValidator);
    }
}

import {
    FormControl,
    FormArray,
    AbstractControl,
    ValidatorFn,
    AsyncValidatorFn,
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { TypedAbstractControl } from 'app/shared/forms/typedAbstractControl';
import { ValidationErrors } from '@angular/forms/src/directives/validators';
import {
    TypedValidatorFn,
    TypedAsyncValidatorFn,
} from 'app/shared/forms/typedValidatorFn';

export class TypedFormArray<
    T,
    U extends ValidationErrors = any
> extends FormArray implements TypedAbstractControl<T[], U> {
    readonly value: T[];
    readonly validator: TypedValidatorFn<T[], U>;
    readonly asyncValidator: TypedAsyncValidatorFn<T[], U>;
    readonly errors: U;

    constructor(
        public readonly controls: TypedAbstractControl<T>[],
        validator?:
            | TypedValidatorFn<T, U>
            | Array<TypedValidatorFn<T, Partial<U>>>,
        asyncValidator?:
            | TypedAsyncValidatorFn<T, U>
            | Array<TypedAsyncValidatorFn<T, Partial<U>>>
    ) {
        super(controls, validator, asyncValidator);
    }

    at(index: number): TypedAbstractControl<T> {
        return super.at(index);
    }
    push(control: TypedAbstractControl<T>) {
        super.push(control);
    }
    insert(index: number, control: TypedAbstractControl<T>) {
        super.insert(index, control);
    }
    setControl(index: number, control: TypedAbstractControl<T>) {
        super.setControl(index, control);
    }
}

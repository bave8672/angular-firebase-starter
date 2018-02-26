import { ValidatorFn, ValidationErrors } from '@angular/forms';
import { TypedAbstractControl } from 'app/shared/forms/typedAbstractControl';
import { Observable } from 'rxjs/Observable';

export type TypedValidatorFn<T, U extends ValidationErrors> = (
    control: TypedAbstractControl<T, U>
) => U | null;

export type TypedAsyncValidatorFn<T, U extends ValidationErrors> = (
    control: TypedAbstractControl<T, U>
) => Observable<U | null> | Promise<U | null>;

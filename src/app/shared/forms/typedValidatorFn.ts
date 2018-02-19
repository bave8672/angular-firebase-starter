import {
    ValidatorFn,
    ValidationErrors,
} from '@angular/forms/src/directives/validators';
import { TypedAbstractControl } from 'app/shared/forms/typedAbstractControl';
import { Observable } from 'rxjs/Observable';

export interface TypedValidatorFn<T, U extends ValidationErrors> {
    (control: TypedAbstractControl<T, U>): U | null;
}

export interface TypedAsyncValidatorFn<T, U extends ValidationErrors> {
    (control: TypedAbstractControl<T, U>):
        | Observable<U | null>
        | Promise<U | null>;
}

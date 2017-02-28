import { FormControl } from '@angular/forms';

export const minLength = (message: string) => (n: number) =>
    (control: FormControl) => control.value.length < n ?
        { 'minLength': message } :
        {};

import { Messages } from '../resources/messages';
import { FormControl } from '@angular/forms';

export const passwordValid = (control: FormControl) => {
    if (control.value.length < 6 || !/\d/.test(control.value)) {
        return { 'passwordInvalid': Messages.Validation.PasswordInvalid };
    }
};

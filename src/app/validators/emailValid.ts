import { Messages } from '../resources/messages';
import { FormControl } from '@angular/forms';

export const emailRegex = /^.+@.+/;
export const emailValid = (control: FormControl) => emailRegex.test(control.value) ?
    null :
    { 'EmailInvalid': Messages.Validation.EmailInvalid };

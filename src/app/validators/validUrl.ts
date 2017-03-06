import { FormControl } from '@angular/forms';

const urlRegex = /\w+\.\w{2}/

export const validUrl = (message: string) => (control: FormControl) => urlRegex.test(control.value);

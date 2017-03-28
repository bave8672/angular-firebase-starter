import { getFile } from 'ts-node/dist';
import { error } from 'util';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

/**
 * Finds and displays the error message associated with a given form control or group.
 *
 * Rules:
 * - Won't display mesages for controls that have not been touched
 * - Will only ever display one message at a time
 */
@Component({
    selector: 'app-validation-message',
    template: `<span class="text-danger" *ngIf="message">{{ message }}</span>`
})
export class ValidationMessageComponent {

    @Input() control: FormControl | FormGroup;

    get message() {
        return this.getMessage(this.control);
    }

    private getMessage(control: FormControl | FormGroup, isChild: boolean = false): string | void {
        if (control && control.touched || isChild) {
            if (control.errors) {
                for (const errorName in control.errors) {
                    if (control.errors.hasOwnProperty(errorName)) {
                        return control.errors[errorName];
                    }
                }
            }
            const fg = control as FormGroup;
            if (fg.controls) {
                for (const controlName in fg.controls) {
                    if (fg.controls.hasOwnProperty(controlName)) {
                        const error = this.getMessage(fg[controlName]);
                        if (error) {
                            return error;
                        }
                    }
                }
            }
        }
    }
}

import { FormComponent } from '../helpers/form.component';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserActions } from '../store';

@Component({
    templateUrl: './sign-up.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent extends FormComponent implements OnInit {

    static controlNames = {
        email: 'email',
        password: 'password',
        confirmPassword: 'confirmPassword'
    }

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            [SignUpComponent.controlNames.email]: [''],
            [SignUpComponent.controlNames.password]: [''],
            [SignUpComponent.controlNames.confirmPassword]: ['']
        });
    }

    signUp() {
        if (this.formGroup.valid) {
            this.state.dispatch(new UserActions.SignUp({
                email: this.getFormValue(SignUpComponent.controlNames.email, ''),
                password: this.getFormValue(SignUpComponent.controlNames.password, '')
            }));
        }
    }
}
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { ResetPasswordFormActions } from './form/resetPasswordForm.actions';
import { ResetPasswordFormActionTypes } from 'app/reset-password/state/form/resetPasswordForm.actionTypes';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class ResetPasswordEffects {
    resetPassword$ = this.actions$
        .ofType<ResetPasswordFormActions.Reset>(
            ResetPasswordFormActionTypes.Reset
        )
        .switchMap(action =>
            Observable.of(this.auth.auth.sendPasswordResetEmail(action.payload))
                .map(() => new ResetPasswordFormActions.Success())
                .catch(() =>
                    Observable.of(new ResetPasswordFormActions.Failure())
                )
        );

    constructor(private actions$: Actions, private auth: AngularFireAuth) {}
}

import 'rxjs/add/operator/filter';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { AngularFireAuth } from 'angularfire2/auth';
import { ResendEmailVerificationActions } from 'app/store/user/resendEmailVerification/resendEmailVerification.actions';
import { ResendEmailVerificationActionTypes } from 'app/store/user/resendEmailVerification/resendEmailVerification.actionTypes';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { AccountAppState } from 'app/account/state/store.config';

@Injectable()
export class ResendEmailVerificationEffects {
    @Effect()
    sendEmailVerification$ = this.actions$
        .ofType(ResendEmailVerificationActionTypes.Resend)
        .switchMap(() =>
            this.auth.authState
                .first()
                .filter(a => !!a && !a.isAnonymous)
                .switchMap(a =>
                    Observable.from(a.sendEmailVerification())
                        .map(
                            res =>
                                new ResendEmailVerificationActions.Success(res)
                        )
                        .catch(error =>
                            Observable.of(
                                new ResendEmailVerificationActions.Failure(
                                    error
                                )
                            )
                        )
                )
        );

    constructor(private actions$: Actions, private state: Store<AccountAppState>, private auth: AngularFireAuth) {}
}

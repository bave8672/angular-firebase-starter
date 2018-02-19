import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { SignUpActions } from './signUpForm.actions';
import { AppState } from 'app/store/app.state';
import { LogInActions } from 'app/store/user/logIn/logIn.actions';
import { SignUpFormActionTypes } from 'app/sign-up/state/form/signUpForm.actionTypes';

@Injectable()
export class SignUpFormEffects {
    @Effect()
    signUp$ = this.actions$
        .ofType(SignUpFormActionTypes.SignUp)
        .switchMap((action: SignUpActions.SignUp) =>
            Observable.from(
                this.auth.auth.createUserWithEmailAndPassword(
                    action.payload.email,
                    action.payload.password
                )
            )
                .switchMap(authState =>
                    this.auth.authState.map(a => {
                        a.sendEmailVerification();
                        return new LogInActions.Success();
                    })
                )
                .catch(error => Observable.of(new SignUpActions.Failure(error)))
        );

    constructor(
        private actions$: Actions,
        private state: Store<AppState>,
        private auth: AngularFireAuth
    ) {}
}

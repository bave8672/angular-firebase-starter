import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { SignUpActionTypes } from 'app/store/user/signUp/signUp.actionTypes';
import { SignUpActions } from './signUp.actions';
import { LogInActions } from '../logIn/logIn.actions';
import { AppState } from 'app/store/app.state';

@Injectable()
export class SignUpEffects {

    @Effect()
    signUp$ = this.actions$.ofType(SignUpActionTypes.SignUp)
        .switchMap((action: SignUpActions.SignUp) =>
            Observable.from(this.auth.auth.createUserWithEmailAndPassword(action.payload.email, action.payload.password))
                .switchMap(authState => this.auth.authState.map(a => {
                    a.sendEmailVerification();
                    return new LogInActions.Success();
                }))
                .catch(error => Observable.of(new SignUpActions.Failure(error))));

    constructor(
        private actions$: Actions,
        private state: Store<AppState>,
        private auth: AngularFireAuth
    ) { }
}

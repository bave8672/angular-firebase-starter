import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { StateService } from '../../state-service/state.service';
import { SignUpActionTypes } from 'app/store/user/signUp/signUp.actionTypes';
import { SignUpActions } from './signUp.actions';
import { LogInActions } from '../logIn/logIn.actions';

@Injectable()
export class SignUpEffects {

    @Effect()
    signUp$ = this.state.actions$.ofType(SignUpActionTypes.SignUp)
        .switchMap((action: SignUpActions.SignUp) =>
            Observable.from(this.auth.auth.createUserWithEmailAndPassword(action.payload.email, action.payload.password))
                .switchMap(authState => this.auth.authState.map(a => {
                    a.sendEmailVerification();
                    return new LogInActions.Success();
                }))
                .catch(error => Observable.of(new SignUpActions.Failure(error))));

    constructor(
        private state: StateService,
        private auth: AngularFireAuth
    ) { }
}

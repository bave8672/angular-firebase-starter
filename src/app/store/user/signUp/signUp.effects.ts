import { LogInActions, SignUpActions, SignUpActionTypes } from '../';
import { StateService } from '../../state-service/state.service';
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SignUpEffects {

    @Effect()
    signUp$ = this.state.actions$.ofType(SignUpActionTypes.SignUp)
        .switchMap((action: SignUpActions.SignUp) =>
            Observable.from(this.firebase.auth.createUser(action.payload))
                .switchMap(authState => this.firebase.auth.map(a => {
                    a.auth.sendEmailVerification();
                    return new LogInActions.Success(authState);
                }))
                .catch(error => Observable.of(new SignUpActions.Failure(error))));

    constructor(
        private state: StateService,
        private firebase: AngularFire
    ) {}
}

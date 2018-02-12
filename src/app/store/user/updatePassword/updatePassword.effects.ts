import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { AngularFireAuth } from 'angularfire2/auth';
import { LogInActions } from 'app/store/user/logIn/logIn.actions';
import { LogInActionTypes } from 'app/store/user/logIn/logIn.actionTypes';
import { UpdatePasswordActions } from 'app/store/user/updatePassword/updatePassword.actions';
import { UpdatePasswordActionTypes } from 'app/store/user/updatePassword/updatePassword.actionTypes';
import { Observable } from 'rxjs/Observable';

import { StateService } from '../../state-service/state.service';

@Injectable()
export class UpdatePasswordEffects {
    @Effect()
    updatePassword$ = this.state.actions$
        .ofType(UpdatePasswordActionTypes.Update)
        .map((action: UpdatePasswordActions.Update) => action.payload)
        .switchMap(passwords => {
            this.state.dispatch(
                new LogInActions.LogIn({
                    email: this.auth.auth.currentUser.email,
                    password: passwords.old,
                })
            );

            return Observable.race(
                this.state.actions$
                    .ofType<LogInActions.Success>(LogInActionTypes.Success)
                    .switchMap(() =>
                        Observable.from(
                            this.auth.auth.currentUser.updatePassword(
                                passwords.new
                            )
                        )
                            .map(res => new UpdatePasswordActions.Success(res))
                            .catch(err =>
                                Observable.of(
                                    new UpdatePasswordActions.Failure(err)
                                )
                            )
                    ),
                this.state.actions$
                    .ofType<LogInActions.Failure>(LogInActionTypes.Failure)
                    .map(
                        action =>
                            new UpdatePasswordActions.Failure(action.payload)
                    )
            );
        });

    constructor(private state: StateService, private auth: AngularFireAuth) {}
}

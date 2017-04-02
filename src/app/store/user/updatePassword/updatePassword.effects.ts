import { LogInActions, LogInActionTypes } from '../';
import { StateService } from '../../state-service/state.service';
import { UpdatePasswordActions, UpdatePasswordActionTypes } from './';
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UpdatePasswordEffects {

    @Effect()
    updatePassword$ = this.state.actions$.ofType(UpdatePasswordActionTypes.Update)
        .map((action: UpdatePasswordActions.Update) => action.payload)
        .switchMap(passwords => {

            this.state.dispatch(new LogInActions.LogIn({
                email: this.firebase.auth.getAuth().auth.email,
                password: passwords.old
            }));

            return Observable.race(
                this.state.actions$.ofType(LogInActionTypes.Success)
                    .switchMap(() => Observable.from(this.firebase.auth.getAuth().auth.updatePassword(passwords.new))
                        .map(res => new UpdatePasswordActions.Success(res))
                        .catch(err => Observable.of(new UpdatePasswordActions.Failure(err)))),
                this.state.actions$.ofType(LogInActionTypes.Failure)
                    .map(action => new UpdatePasswordActions.Failure(action.payload)));
        });

    constructor(
        private state: StateService,
        private firebase: AngularFire
    ) {}
}

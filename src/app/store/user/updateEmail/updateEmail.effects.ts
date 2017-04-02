import { StateService } from '../../state-service/state.service';
import { UpdateEmailActions, UpdateEmailActionTypes } from './';
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UpdateEmailEffects {

    @Effect()
    updateEmail$ = this.state.actions$.ofType(UpdateEmailActionTypes.Update)
        .switchMap((action: UpdateEmailActions.Update) => action.payload)
        .switchMap(newEmail => this.firebase.auth.filter(a => !!a)
            .switchMap(a => a.auth.updateEmail(newEmail))
            .map(res => new UpdateEmailActions.Update(res))
            .catch(error => Observable.of(new UpdateEmailActions.Failure(error))));

    constructor(
        private state: StateService,
        private firebase: AngularFire
    ) {}
}

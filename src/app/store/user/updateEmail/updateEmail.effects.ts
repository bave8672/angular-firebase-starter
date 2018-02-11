import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { AngularFireAuth } from 'angularfire2/auth';
import { UpdateEmailActions } from 'app/store/user/updateEmail/updateEmail.actions';
import { UpdateEmailActionTypes } from 'app/store/user/updateEmail/updateEmail.actionTypes';
import { Observable } from 'rxjs/Observable';

import { StateService } from '../../state-service/state.service';

@Injectable()
export class UpdateEmailEffects {
    @Effect()
    updateEmail$ = this.state.actions$
        .ofType(UpdateEmailActionTypes.Update)
        .switchMap((action: UpdateEmailActions.Update) => action.payload)
        .switchMap(newEmail =>
            this.auth.authState
                .first()
                .filter(a => !a.isAnonymous)
                .switchMap(a => a.updateEmail(newEmail))
                .map(res => new UpdateEmailActions.Update(res))
                .catch(error =>
                    Observable.of(new UpdateEmailActions.Failure(error))
                )
        );

    constructor(private state: StateService, private auth: AngularFireAuth) {}
}

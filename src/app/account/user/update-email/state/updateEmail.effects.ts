import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { AccountAppState } from 'app/account/state/store.config';
import { UpdateEmailActionTypes } from 'app/account/user/update-email/state/updateEmail.actionTypes';
import { UpdateEmailActions } from 'app/account/user/update-email/state/updateEmail.actions';

@Injectable()
export class UpdateEmailEffects {
    @Effect()
    updateEmail$ = this.actions$
        .ofType(UpdateEmailActionTypes.Update)
        .map((action: UpdateEmailActions.Update) => action.payload)
        .switchMap(newEmail =>
            this.auth.authState
                .first()
                .filter(a => !a.isAnonymous)
                .switchMap(a => a.updateEmail(newEmail))
                .map(res => new UpdateEmailActions.Success(res))
                .catch(error =>
                    Observable.of(new UpdateEmailActions.Failure(error))
                )
        );

    constructor(private actions$: Actions, private auth: AngularFireAuth) {}
}

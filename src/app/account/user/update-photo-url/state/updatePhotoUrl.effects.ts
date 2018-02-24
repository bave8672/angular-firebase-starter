import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { AccountAppState } from 'app/account/state/store.config';
import { Actions } from '@ngrx/effects';
import { UpdatePhotoUrlActionTypes } from 'app/account/user/update-photo-url/state/updatePhotoUrl.actionTypes';
import { UpdatePhotoUrlActions } from 'app/account/user/update-photo-url/state/updatePhotoUrl.actions';

@Injectable()
export class UpdatePhotoUrlEffects {
    @Effect()
    updatePhotoUrl$ = this.actions$
        .ofType(UpdatePhotoUrlActionTypes.Update)
        .map((action: UpdatePhotoUrlActions.Update) => action.payload)
        .switchMap(url =>
            this.auth.authState
                .switchMap(authState => {
                    return Observable.from(
                        authState.updateProfile({
                            displayName: authState.displayName,
                            photoURL: url,
                        })
                    );
                })
                .map(res => new UpdatePhotoUrlActions.Success(res))
                .catch(error =>
                    Observable.of(new UpdatePhotoUrlActions.Failure(error))
                )
        );

    constructor(private actions$: Actions, private auth: AngularFireAuth) {}
}

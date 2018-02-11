import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { StateService } from '../../state-service/state.service';
import { UpdatePhotoUrlActionTypes } from 'app/store/user/updatePhotoUrl/updatePhotoUrl.actionTypes';
import { UpdatePhotoUrlActions } from 'app/store/user/updatePhotoUrl/updatePhotoUrl.actions';

@Injectable()
export class UpdatePhotoUrlEffects {

    @Effect()
    updatePhotoUrl$ = this.state.actions$.ofType(UpdatePhotoUrlActionTypes.Update)
        .map((action: UpdatePhotoUrlActions.Update) => action.payload)
        .switchMap(url => this.auth.authState
            .switchMap(authState => {
                return Observable.from(authState.updateProfile({
                    displayName: authState.displayName,
                    photoURL: url
                }));
            })
            .map(res => new UpdatePhotoUrlActions.Success(res))
            .catch(error => Observable.of(new UpdatePhotoUrlActions.Failure(error))));

    constructor(
        private state: StateService,
        private auth: AngularFireAuth
    ) { }
}

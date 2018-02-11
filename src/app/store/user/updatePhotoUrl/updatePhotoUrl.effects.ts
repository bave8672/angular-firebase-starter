import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';

import { StateService } from '../../state-service/state.service';
import { UpdatePhotoUrlActions, UpdatePhotoUrlActionTypes } from './';

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

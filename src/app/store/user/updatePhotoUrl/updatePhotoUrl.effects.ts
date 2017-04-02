import { StateService } from '../../state-service/state.service';
import { UpdatePhotoUrlActions, UpdatePhotoUrlActionTypes } from './';
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UpdatePhotoUrlEffects {

    @Effect()
    updatePhotoUrl$ = this.state.actions$.ofType(UpdatePhotoUrlActionTypes.Update)
        .map((action: UpdatePhotoUrlActions.Update) => action.payload)
        .switchMap(url => this.firebase.auth
            .map(a => a.auth)
            .switchMap(auth => {
                return Observable.from(auth.updateProfile({
                    displayName: auth.displayName,
                    photoURL: url
                }));
        })
            .map(res => new UpdatePhotoUrlActions.Success(res))
            .catch(error => Observable.of(new UpdatePhotoUrlActions.Failure(error))));

    constructor(
        private state: StateService,
        private firebase: AngularFire
    ) {}
}

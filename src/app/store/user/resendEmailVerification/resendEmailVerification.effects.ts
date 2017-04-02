import { StateService } from '../../state-service/state.service';
import { ResendEmailVerificationActions, ResendEmailVerificationActionTypes } from './';
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ResendEmailVerificationEffects {

    @Effect()
    sendEmailVerification$ = this.state.actions$.ofType(ResendEmailVerificationActionTypes.Resend)
        .switchMap(() => this.firebase.auth.filter(a => !!a)
            .switchMap(a => a.auth.sendEmailVerification())
            .map(res => new ResendEmailVerificationActions.Success(res))
            .catch(error => Observable.of(new ResendEmailVerificationActions.Failure(error))));

    constructor(
        private state: StateService,
        private firebase: AngularFire
    ) {}
}

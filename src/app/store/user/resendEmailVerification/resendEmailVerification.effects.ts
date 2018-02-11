import { StateService } from '../../state-service/state.service';
import { ResendEmailVerificationActions, ResendEmailVerificationActionTypes } from './';
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class ResendEmailVerificationEffects {

    @Effect()
    sendEmailVerification$ = this.state.actions$.ofType(ResendEmailVerificationActionTypes.Resend)
        .switchMap(() => this.auth.authState.filter(a => !a.isAnonymous)
            .switchMap(a => Observable.from(a.sendEmailVerification())
                .map(res => new ResendEmailVerificationActions.Success(res))
                .catch(error => Observable.of(new ResendEmailVerificationActions.Failure(error)))));

    constructor(
        private state: StateService,
        private auth: AngularFireAuth
    ) {}
}

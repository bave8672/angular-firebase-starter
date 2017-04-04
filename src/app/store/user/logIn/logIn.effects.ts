import { StateService } from '../../state-service/state.service';
import { LogInActions, LogInActionTypes } from './';
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { go, routerActions } from '@ngrx/router-store';
import { AngularFire } from 'angularfire2';
import {
    AuthConfiguration,
    AuthMethods,
    AuthProviders,
    EmailPasswordCredentials,
    FirebaseAuthState
} from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LogInEffects {

    @Effect()
    logIn$: Observable<LogInActions.Failure | LogInActions.Success> = this.state.actions$
        .ofType(LogInActionTypes.LogIn)
        .switchMap((action: LogInActions.LogIn) => {
            let request: firebase.Promise<FirebaseAuthState>;
            if ((action.payload as EmailPasswordCredentials).email) {
                const passwordConfig: AuthConfiguration = {
                    provider: AuthProviders.Password,
                    method: AuthMethods.Password
                };
                request = this.firebase.auth.login(action.payload as EmailPasswordCredentials, passwordConfig);
            } else {
                request = this.firebase.auth.login(action.payload as AuthConfiguration);
            }
            return Observable.from(request)
                .map(authState => new LogInActions.Success(authState))
                .catch(error => Observable.of(new LogInActions.Failure(error)));
    });

    @Effect()
    redirectToProfileOnLoginSuccess$ = this.state.actions$.ofType(LogInActionTypes.Success)
        .map(() => go('/account/profile'));

    // TODO: Move logout into it's own store category + add spinner etc
    @Effect()
    logOut$ = this.state.actions$.ofType(LogInActionTypes.LogOut)
        .switchMap(() => Observable.from(this.firebase.auth.logout())
            .map(() => go('/')));

    constructor(
        private state: StateService,
        private firebase: AngularFire
    ) {}
}

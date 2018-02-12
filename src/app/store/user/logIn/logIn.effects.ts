import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthProvider } from '@firebase/auth-types';
import { Effect } from '@ngrx/effects';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { StateService } from '../../state-service/state.service';
import { LogInActions } from 'app/store/user/logIn/logIn.actions';
import { LogInActionTypes } from 'app/store/user/logIn/logIn.actionTypes';
import { EmailPasswordCredentials } from 'app/store/user/signUp/signUp.actions';

@Injectable()
export class LogInEffects {
    @Effect()
    logIn$: Observable<
        LogInActions.Failure | LogInActions.Success
    > = this.state.actions$
        .ofType(LogInActionTypes.LogIn)
        .switchMap((action: LogInActions.LogIn) => {
            let request;

            if ((action.payload as any).providerId) {
                request = this.auth.auth.signInWithPopup(
                    action.payload as AuthProvider
                );
            } else {
                request = this.auth.auth.signInWithEmailAndPassword(
                    (action.payload as EmailPasswordCredentials).email,
                    (action.payload as EmailPasswordCredentials).password
                );
            }
            return Observable.from(request)
                .map(authState => new LogInActions.Success())
                .catch(error => Observable.of(new LogInActions.Failure(error)));
        });

    @Effect({ dispatch: false })
    redirectToProfileOnLoginSuccess$ = this.state.actions$
        .ofType(LogInActionTypes.Success)
        .map(() => this.router.navigateByUrl('/account/profile'));

    // TODO: Move logout into it's own store category + add spinner etc
    @Effect({ dispatch: false })
    logOut$ = this.state.actions$
        .ofType(LogInActionTypes.LogOut)
        .switchMap(() =>
            Observable.from(this.auth.auth.signOut()).map(() =>
                this.router.navigateByUrl('/')
            )
        );

    @Effect()
    hideOnNavigation$ = this.router.events
        .filter(e => e instanceof NavigationEnd)
        .map(() => new LogInActions.HideModal());

    constructor(
        private state: StateService,
        private auth: AngularFireAuth,
        private router: Router
    ) {}
}

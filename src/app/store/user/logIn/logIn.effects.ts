import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthProvider } from '@firebase/auth-types';
import { Effect, Actions } from '@ngrx/effects';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { LogInActions } from 'app/store/user/logIn/logIn.actions';
import { LogInActionTypes } from 'app/store/user/logIn/logIn.actionTypes';
import { AppState } from 'app/store/app.state';

@Injectable()
export class LogInEffects {
    @Effect()
    logIn$: Observable<
        LogInActions.Failure | LogInActions.Success
    > = this.actions$
        .ofType<LogInActions.LogIn>(LogInActionTypes.LogIn)
        .switchMap(action => {
            let request;

            if ((action.payload as any).providerId) {
                request = this.auth.auth.signInWithPopup(
                    action.payload as AuthProvider
                );
            } else {
                request = this.auth.auth.signInWithEmailAndPassword(
                    (action.payload as any).email,
                    (action.payload as any).password
                );
            }
            return Observable.from(request)
                .map(authState => new LogInActions.Success())
                .catch(error => Observable.of(new LogInActions.Failure(error)));
        });

    @Effect({ dispatch: false })
    redirectToProfileOnLoginSuccess$ = this.actions$
        .ofType(LogInActionTypes.Success)
        .map(() => this.router.navigateByUrl('/account/profile'));

    // TODO: Move logout into it's own store category + add spinner etc
    @Effect({ dispatch: false })
    logOut$ = this.actions$
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
        private actions$: Actions,
        private state: Store<AppState>,
        private auth: AngularFireAuth,
        private router: Router
    ) {}
}

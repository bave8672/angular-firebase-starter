import {
    AuthConfiguration,
    AuthMethods,
    AuthProviders,
    EmailPasswordCredentials,
    FirebaseAuthState
} from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';
import { StatefulClass } from '../../helpers/statefulClass';
import { UserActionTypes } from './user.actionTypes';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { UserActions } from '../';
import { StateService } from '../state-service/state.service';
import { AngularFire } from 'angularfire2';
import { go } from '@ngrx/router-store';

@Injectable()
export class UserEffects extends StatefulClass {

    @Effect()
    logIn$: Observable<UserActions.LogInFailure | UserActions.LogInSuccess> = this.state.actions$.ofType(UserActionTypes.LogIn)
        .switchMap((action: UserActions.LogIn) => {
            let request: firebase.Promise<FirebaseAuthState>;
            if ((action.payload as EmailPasswordCredentials).email) {
                const passwordConfig: AuthConfiguration = { provider: AuthProviders.Password, method: AuthMethods.Password };
                request = this.firebase.auth.login(action.payload as EmailPasswordCredentials, passwordConfig);
            } else {
                request = this.firebase.auth.login(action.payload as AuthConfiguration);
            }
            return Observable.from(request)
                .map(authState => new UserActions.LogInSuccess(authState))
                .catch(error => Observable.of(new UserActions.LogInFailure(error)));
    });

    @Effect({ dispatch: false })
    logOut$ = this.state.actions$.ofType(UserActionTypes.LogOut)
        .map(() => this.firebase.auth.logout());

    @Effect()
    signUp$ = this.state.actions$.ofType(UserActionTypes.SignUp)
        .switchMap((action: UserActions.SignUp) =>
            Observable.from(this.firebase.auth.createUser(action.payload))
                .map(authState => new UserActions.LogInSuccess(authState))
                .catch(error => Observable.of(new UserActions.SignUpFailure(error))));

    @Effect()
    navigateToProfileOnLogin$ = this.state.actions$.ofType(UserActionTypes.LogInSuccess)
        .map(() => go('/profile'));

    constructor(
        state: StateService,
        firebase: AngularFire
    ) {
        super(state, firebase);
    }
}

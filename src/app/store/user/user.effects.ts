import { GlobalActionTypes } from '../global/global.actionTypes';
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
    logIn$: Observable<UserActions.LogInFailure | UserActions.LogInSuccess> = this.state.actions$
        .ofType(UserActionTypes.LogIn)
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

    @Effect()
    logOut$ = this.state.actions$.ofType(UserActionTypes.LogOut)
        .switchMap(() => Observable.from(this.firebase.auth.logout()))
        .map(() => go('/'));

    @Effect()
    signUp$ = this.state.actions$.ofType(UserActionTypes.SignUp)
        .switchMap((action: UserActions.SignUp) =>
            Observable.from(this.firebase.auth.createUser(action.payload))
                .map(authState => {
                    this.firebase.auth.getAuth().auth.sendEmailVerification();
                    return new UserActions.LogInSuccess(authState)
                })
                .catch(error => Observable.of(new UserActions.SignUpFailure(error))));

    @Effect()
    navigateToProfileOnLogin$ = this.state.actions$.ofType(UserActionTypes.LogInSuccess)
        .map(() => go('/account/profile'))
        .takeUntil(Observable.timer(10000));

    // TODO: implement resetting password when angularfire2 implements it
    // @Effect()
    // resetPassword$ = this.state.actions$.ofType(UserActionTypes.ResetPassword)
    //     .switchMap((action: UserActions.ResetPassword) => 
    //         Observable.from(this.firebase.auth.getAuth().auth.sendEmailVerification())
    //         .map()

    @Effect()
    updatePassword$ = this.state.actions$.ofType(UserActionTypes.UpdatePassword)
        .map((action: UserActions.UpdatePassword) => action.payload)
        .switchMap(passwords => {

            this.state.dispatch(new UserActions.LogIn({
                email: this.firebase.auth.getAuth().auth.email,
                password: passwords.old
            }));

            return Observable.race(
                this.state.actions$.ofType(UserActionTypes.LogInSuccess)
                    .switchMap(() => Observable.from(this.firebase.auth.getAuth().auth.updatePassword(passwords.new))
                        .map(res => new UserActions.UpdatePasswordSuccess(res))
                        .catch(err => Observable.of(new UserActions.UpdatePasswordFailure(err)))),
                this.state.actions$.ofType(UserActionTypes.LogInFailure)
                    .map(action => new UserActions.UpdatePasswordFailure(action.payload)))
        });

    @Effect()
    updatePhotoUrl$ = this.state.actions$.ofType(UserActionTypes.UpdatePhotoUrl)
        .map((action: UserActions.UpdatePhotoUrl) => action.payload)
        .switchMap(url => this.firebase.auth
            .map(a => a.auth)
            .switchMap(auth => {
                return Observable.from(auth.updateProfile({
                displayName: auth.displayName,
                photoURL: url
            }))})
            .map(res => new UserActions.UpdatePhotoUrlSuccess(res))
            .catch(error => Observable.of(new UserActions.UpdatePhotoUrlFailure(error))));

    @Effect()
    sendEmailVerification$ = this.state.actions$.ofType(UserActionTypes.SendEmailVerification)
        .switchMap(() => this.firebase.auth.filter(a => !!a)
            .switchMap(a => a.auth.sendEmailVerification())
            .map(res => new UserActions.SendEmailVerificationSuccess(res))
            .catch(error => Observable.of(new UserActions.SendEmailVerificationFailure(error))));

    @Effect()
    updateEmail$ = this.state.actions$.ofType(UserActionTypes.UpdateEmail)
        .switchMap((action: UserActions.UpdateEmail) => action.payload)
        .switchMap(newEmail => this.firebase.auth.filter(a => !!a)
            .switchMap(a => a.auth.updateEmail(newEmail))
            .map(res => new UserActions.UpdateEmailSuccess(res))
            .catch(error => Observable.of(new UserActions.UpdateEmailFailure(error))));

    constructor(
        state: StateService,
        firebase: AngularFire
    ) {
        super(state, firebase);
    }
}

import { SignUpActionTypes } from './signUp/signUp.actionTypes';
import { LogInActions, UserActions, SignUpActions } from '../';
import { StateService } from '../state-service/state.service';
import { LogInActionTypes } from './logIn';
import { UserActionTypes } from './user.actionTypes';
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { go } from '@ngrx/router-store';
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
export class UserEffects {

    @Effect()
    logIn$: Observable<LogInActions.Failure | LogInActions.Success> = this.state.actions$
        .ofType(LogInActionTypes.LogIn)
        .switchMap((action: LogInActions.LogIn) => {
            let request: firebase.Promise<FirebaseAuthState>;
            if ((action.payload as EmailPasswordCredentials).email) {
                const passwordConfig: AuthConfiguration = { provider: AuthProviders.Password, method: AuthMethods.Password };
                request = this.firebase.auth.login(action.payload as EmailPasswordCredentials, passwordConfig);
            } else {
                request = this.firebase.auth.login(action.payload as AuthConfiguration);
            }
            return Observable.from(request)
                .map(authState => new LogInActions.Success(authState))
                .catch(error => Observable.of(new LogInActions.Failure(error)));
    });

    @Effect()
    logOut$ = this.state.actions$.ofType(UserActionTypes.LogOut)
        .switchMap(() => Observable.from(this.firebase.auth.logout()))
        .map(() => go('/'));

    @Effect()
    signUp$ = this.state.actions$.ofType(SignUpActionTypes.SignUp)
        .switchMap((action: SignUpActions.SignUp) =>
            Observable.from(this.firebase.auth.createUser(action.payload))
                .switchMap(authState => this.firebase.auth.map(a => {
                    a.auth.sendEmailVerification();
                    return new LogInActions.Success(authState);
                }))
                .catch(error => Observable.of(new SignUpActions.Failure(error))));

    @Effect()
    redirectToProfliePageOnLoginSuccess$ = this.state.actions$.ofType(LogInActionTypes.Success)
        .map(() => go('/Profile'));

    @Effect()
    navigateToProfileOnLogin$ = this.state.actions$.ofType(LogInActionTypes.Success)
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

            this.state.dispatch(new LogInActions.LogIn({
                email: this.firebase.auth.getAuth().auth.email,
                password: passwords.old
            }));

            return Observable.race(
                this.state.actions$.ofType(LogInActionTypes.Success)
                    .switchMap(() => Observable.from(this.firebase.auth.getAuth().auth.updatePassword(passwords.new))
                        .map(res => new UserActions.UpdatePasswordSuccess(res))
                        .catch(err => Observable.of(new UserActions.UpdatePasswordFailure(err)))),
                this.state.actions$.ofType(LogInActionTypes.Failure)
                    .map(action => new UserActions.UpdatePasswordFailure(action.payload)));
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
                }));
        })
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
        private state: StateService,
        private firebase: AngularFire
    ) {}
}

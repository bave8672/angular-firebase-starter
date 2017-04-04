import { AuthConfiguration, AuthMethods, AuthProviders, EmailPasswordCredentials } from 'angularfire2/auth';
import { go } from '@ngrx/router-store';
import { assignDeep } from '../../../helpers';
import { DefaultAppState } from '../../app.state';
import { StateService } from '../../state-service/state.service';
import { mockStateService } from '../../state-service/state.service.mock';
import { LogInActions } from './';
import { LogInEffects } from './logIn.effects';
import { inject, TestBed } from '@angular/core/testing';
import { EffectsRunner, EffectsTestingModule } from '@ngrx/effects/testing';
import { AngularFire } from 'angularfire2';

describe('log in effects', () => {

    class MockFirebase {
        get auth() {
            return {
                login: MockFirebase.prototype.login,
                logout: MockFirebase.prototype.logout
            };
        }
        login() {
            return Promise.resolve('logged in');
        }
        logout() {
             return Promise.resolve('logged out');
        }
    };

    let state = assignDeep(DefaultAppState);

    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            EffectsTestingModule
        ],
        providers: [
            LogInEffects,
            { provide: StateService, useClass: mockStateService(state) },
            { provide: AngularFire, useClass: MockFirebase }
        ]
    }));

    let runner: EffectsRunner;
    let logInEffects: LogInEffects;

    beforeEach(inject([
            EffectsRunner, LogInEffects
        ],
        (_runner, _logInEffects) => {
            runner = _runner;
            logInEffects = _logInEffects;
            state = assignDeep(DefaultAppState);
        }));

    it('Redirects To Profile On Login Success', (done) => {
        runner.queue(new LogInActions.Success({} as any));
        logInEffects.redirectToProfileOnLoginSuccess$.subscribe(result => {
            expect(result).toEqual(go('/account/profile'));
            done();
        });
    });

    it('Redirects to / on logout', (done) => {
        runner.queue(new LogInActions.LogOut());
        logInEffects.logOut$.subscribe(result => {
            expect(result).toEqual(go('/'));
            done();
        });
    });

    it(`Logs in to firebase using the EmailPasswordCredentials signature
        WHEN the action payload mtches that signature`, (done) => {

        spyOn(MockFirebase.prototype, 'login').and.callThrough();

        const emailPassword: EmailPasswordCredentials = {
            email: 'email@example.com',
            password: 'password123'
        };
        const passwordConfig: AuthConfiguration = {
            provider: AuthProviders.Password,
            method: AuthMethods.Password
        };

        runner.queue(new LogInActions.LogIn(emailPassword));

        logInEffects.logIn$.subscribe(result => {
            expect(MockFirebase.prototype.login).toHaveBeenCalledTimes(1);
            expect(MockFirebase.prototype.login).toHaveBeenCalledWith(emailPassword, passwordConfig);
            expect(result).toEqual(new LogInActions.Success('logged in' as any));
            done();
        });
    });
});

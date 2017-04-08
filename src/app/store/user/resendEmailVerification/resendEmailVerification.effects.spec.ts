import { Observable } from 'rxjs/Rx';
import { ResultFunc } from 'rxjs/observable/GenerateObservable';
import { AuthConfiguration, AuthMethods, AuthProviders, EmailPasswordCredentials } from 'angularfire2/auth';
import { go } from '@ngrx/router-store';
import { assignDeep } from '../../../helpers';
import { DefaultAppState } from '../../app.state';
import { StateService } from '../../state-service/state.service';
import { mockStateService } from '../../state-service/state.service.mock';
import { ResendEmailVerificationActionTypes, ResendEmailVerificationEffects, ResendEmailVerificationActions } from './';
import { inject, TestBed } from '@angular/core/testing';
import { EffectsRunner, EffectsTestingModule } from '@ngrx/effects/testing';
import { AngularFire } from 'angularfire2';

describe('Resend Email Verification Effects', () => {

    let state = assignDeep(DefaultAppState);

    let isLoggedin = true;

    class MockAngularFire {
        get auth() {
            return Observable.of(isLoggedin ? {
                auth: {
                    sendEmailVerification: MockAngularFire.prototype.sendEmailVerification
                }
            } : null);
        }
        sendEmailVerification() {}
    }

    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            EffectsTestingModule
        ],
        providers: [
            ResendEmailVerificationEffects,
            { provide: StateService, useClass: mockStateService(state) },
            { provide: AngularFire, useClass: MockAngularFire }
        ]
    }));

    let runner: EffectsRunner;
    let effects: ResendEmailVerificationEffects;

    beforeEach(inject([
            EffectsRunner, ResendEmailVerificationEffects
        ],
        (_runner, _effects) => {
            runner = _runner;
            effects = _effects;
            state = assignDeep(DefaultAppState);
        }));

    it(`Calls the firebase sendEmailVerification method
        And returns a success action containing the result`, (done) => {

        spyOn(MockAngularFire.prototype, 'sendEmailVerification')
            .and.callFake(() => Observable.of('success'));

        runner.queue(new ResendEmailVerificationActions.Resend());

        effects.sendEmailVerification$.subscribe(result => {
            expect(MockAngularFire.prototype.sendEmailVerification).toHaveBeenCalledTimes(1);
            expect(result).toEqual(new ResendEmailVerificationActions.Success('success'));
            done();
        });
    });

    it(`Calls the firebase sendEmailVerification method
        AND returns a failure action containing the result
        WHEN the request fails`, (done) => {

        spyOn(MockAngularFire.prototype, 'sendEmailVerification')
            .and.callFake(() => Observable.throw('failure'));

        runner.queue(new ResendEmailVerificationActions.Resend());

        effects.sendEmailVerification$.subscribe(result => {
            expect(result).toEqual(new ResendEmailVerificationActions.Failure('failure'));
            done();
        });
    });

    it(`Does not call WHEN the auth is null`, (done) => {
        isLoggedin = false;

        spyOn(MockAngularFire.prototype, 'sendEmailVerification');

        runner.queue(new ResendEmailVerificationActions.Resend());

        effects.sendEmailVerification$.subscribe(result => {
            throw new Error('effect should not have an output.');
        });

        setTimeout(() => {
            expect(MockAngularFire.prototype.sendEmailVerification).not.toHaveBeenCalled();
            done();
        }, 200);
    });
});

import { inject, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import { ResendEmailVerificationActions } from 'app/store/user/resendEmailVerification/resendEmailVerification.actions';
import { ResendEmailVerificationEffects } from 'app/store/user/resendEmailVerification/resendEmailVerification.effects';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { assignDeep } from '../../../helpers';
import { DefaultAppState } from '../../app.state';
import { StateService } from '../../state-service/state.service';
import { mockStateService } from '../../state-service/state.service.mock';

describe('Resend Email Verification Effects', () => {
    let resendEmailVerificationEffects: ResendEmailVerificationEffects;
    let state = assignDeep(DefaultAppState);
    const mockActions$ = new ReplaySubject<Action>(1);
    let isLoggedin = true;

    class MockAngularFireAuth {
        get authState() {
            return Observable.of(
                isLoggedin
                    ? {
                          sendEmailVerification:
                              MockAngularFireAuth.prototype
                                  .sendEmailVerification,
                      }
                    : null
            );
        }
        sendEmailVerification() {}
    }

    beforeEach(() => {
        state = assignDeep(DefaultAppState);
        TestBed.configureTestingModule({
            providers: [
                ResendEmailVerificationEffects,
                provideMockActions(() => mockActions$),
                { provide: StateService, useClass: mockStateService(state) },
                { provide: AngularFireAuth, useClass: MockAngularFireAuth },
            ],
        });
        resendEmailVerificationEffects = TestBed.get(
            ResendEmailVerificationEffects
        );
    });

    it(`Calls the firebase sendEmailVerification method
        And returns a success action containing the result`, done => {
        spyOn(
            MockAngularFireAuth.prototype,
            'sendEmailVerification'
        ).and.callFake(() => Observable.of('success'));

        mockActions$.next(new ResendEmailVerificationActions.Resend());

        resendEmailVerificationEffects.sendEmailVerification$.subscribe(
            result => {
                expect(
                    MockAngularFireAuth.prototype.sendEmailVerification
                ).toHaveBeenCalledTimes(1);
                expect(result).toEqual(
                    new ResendEmailVerificationActions.Success('success')
                );
                done();
            }
        );
    });

    it(`Calls the firebase sendEmailVerification method
        AND returns a failure action containing the result
        WHEN the request fails`, done => {
        spyOn(
            MockAngularFireAuth.prototype,
            'sendEmailVerification'
        ).and.callFake(() => Observable.throw('failure'));

        mockActions$.next(new ResendEmailVerificationActions.Resend());

        resendEmailVerificationEffects.sendEmailVerification$.subscribe(
            result => {
                expect(result).toEqual(
                    new ResendEmailVerificationActions.Failure('failure')
                );
                done();
            }
        );
    });

    it(`Does not call WHEN the auth is null`, done => {
        isLoggedin = false;

        spyOn(MockAngularFireAuth.prototype, 'sendEmailVerification');

        mockActions$.next(new ResendEmailVerificationActions.Resend());

        resendEmailVerificationEffects.sendEmailVerification$.subscribe(
            result => {
                throw new Error('effect should not have an output.');
            }
        );

        setTimeout(() => {
            expect(
                MockAngularFireAuth.prototype.sendEmailVerification
            ).not.toHaveBeenCalled();
            done();
        }, 200);
    });
});

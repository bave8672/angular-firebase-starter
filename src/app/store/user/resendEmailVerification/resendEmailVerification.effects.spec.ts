import { async, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import { ResendEmailVerificationActions } from 'app/store/user/resendEmailVerification/resendEmailVerification.actions';
import { ResendEmailVerificationEffects } from 'app/store/user/resendEmailVerification/resendEmailVerification.effects';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { assignDeep } from '../../../helpers';
import { DefaultAppState } from '../../app.state';
import { Store } from '@ngrx/store';

describe('Resend Email Verification Effects', () => {
    let resendEmailVerificationEffects: ResendEmailVerificationEffects;
    let state = assignDeep(DefaultAppState);
    let mockActions$: ReplaySubject<Action>;
    let isLoggedin = true;

    class MockAngularFireAuth {
        get authState() {
            return Observable.of(
                isLoggedin
                    ? {
                          sendEmailVerification:
                              MockAngularFireAuth.prototype
                                  .sendEmailVerification,
                          isAnonymous: false,
                      }
                    : null
            );
        }
        sendEmailVerification() {
            return Promise.resolve();
        }
    }

    class MockStore {}

    beforeEach(() => {
        state = assignDeep(DefaultAppState);
        TestBed.configureTestingModule({
            providers: [
                ResendEmailVerificationEffects,
                provideMockActions(() => mockActions$),
                { provide: Store, useClass: MockStore },
                { provide: AngularFireAuth, useClass: MockAngularFireAuth },
            ],
        });
        resendEmailVerificationEffects = TestBed.get(
            ResendEmailVerificationEffects
        );
        mockActions$ = new ReplaySubject<Action>(1);
    });

    it(
        `Calls the firebase sendEmailVerification method
        And returns a success action containing the result`,
        async(() => {
            spyOn(
                MockAngularFireAuth.prototype,
                'sendEmailVerification'
            ).and.callFake(() => Promise.resolve('success'));

            mockActions$.next(new ResendEmailVerificationActions.Resend());

            resendEmailVerificationEffects.sendEmailVerification$.subscribe(
                result => {
                    expect(
                        MockAngularFireAuth.prototype.sendEmailVerification
                    ).toHaveBeenCalledTimes(1);
                    expect(result).toEqual(
                        new ResendEmailVerificationActions.Success('success')
                    );
                }
            );
        })
    );

    it(
        `Calls the firebase sendEmailVerification method
        AND returns a failure action containing the result
        WHEN the request fails`,
        async(() => {
            spyOn(
                MockAngularFireAuth.prototype,
                'sendEmailVerification'
            ).and.callFake(() => Promise.reject('failure'));

            mockActions$.next(new ResendEmailVerificationActions.Resend());

            resendEmailVerificationEffects.sendEmailVerification$.subscribe(
                result => {
                    expect(result).toEqual(
                        new ResendEmailVerificationActions.Failure('failure')
                    );
                }
            );
        })
    );

    it(
        `Does not call WHEN the auth is null`,
        async(() => {
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
            }, 200);
        })
    );
});

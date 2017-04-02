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

    let state = assignDeep(DefaultAppState);

    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            EffectsTestingModule
        ],
        providers: [
            LogInEffects,
            { provide: StateService, useClass: mockStateService(state) },
            { provide: AngularFire, useValue: {} }
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
        logInEffects.redirectToProfileOnLoginSuccess.subscribe(result => {
            expect(result).toEqual(go('/account/profile'));
            done();
        });
    });
});

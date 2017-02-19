import { StateService } from '../store/state-service/state.service';
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class StatefulClass {
    constructor(
        protected state: StateService,
        protected firebase: AngularFire
    ) {}
}

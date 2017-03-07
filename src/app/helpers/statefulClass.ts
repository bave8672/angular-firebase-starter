import { SubscriberComponent } from './subscriber.component';
import { StateService } from '../store/state-service/state.service';
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class StatefulClass extends SubscriberComponent {
    constructor(
        protected state: StateService,
        protected firebase: AngularFire
    ) {
        super();
    }
}

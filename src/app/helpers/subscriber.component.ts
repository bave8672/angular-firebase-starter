import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

export abstract class SubscriberComponent implements OnDestroy {

    subscriptions: Subscription[] = [];

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}

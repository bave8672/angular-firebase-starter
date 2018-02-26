import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

export abstract class SubscriberComponent implements OnDestroy {
    subscriptions: Subscription[] = [];

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}

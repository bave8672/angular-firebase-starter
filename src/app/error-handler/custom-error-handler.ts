import { environment } from '../../environments/environment';
import { ErrorHandler, Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

/**
 * Override for the globlal angular error handler.
 *
 * Calls through to the default handler in development,
 * posts the error to firebase in production.
 */
@Injectable()
export class CustomErrorHandler extends ErrorHandler {

    constructor(private firebase: AngularFire) {
        // Don't rethrow errors
        super(false);
    }

    handleError(error: any) {
        if (!environment.production) {
            super.handleError(error);
        } else {
            this.firebase.database.list('/errors').push(error);
        }
    }
}

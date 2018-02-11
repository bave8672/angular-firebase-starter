import { ErrorHandler, Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { environment } from '../../environments/environment';

/**
 * Override for the globlal angular error handler.
 *
 * Calls through to the default handler in development,
 * posts the error to firebase in production.
 */
@Injectable()
export class CustomErrorHandler extends ErrorHandler {
    constructor(private db: AngularFireDatabase) {
        super();
    }

    handleError(error: Error) {
        if (!environment.production) {
            super.handleError(error);
        } else {
            const errorString = JSON.stringify(
                error,
                Object.getOwnPropertyNames(error)
            );
            this.db.list('/errors').push(errorString);
        }
    }
}

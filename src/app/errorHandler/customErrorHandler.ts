import { environment } from '../../environments/environment';
import { ErrorHandler } from '@angular/core';

export class CustomErrorHandler extends ErrorHandler {

    constructor() {
        // Don't rethrow errors
        super(false);
    }

    handleError(error: any) {
        if (!environment.production) {
            super.handleError(error);
        }
    }
}

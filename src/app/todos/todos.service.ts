import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { IsLoggedInGuard } from '../guards/isLoggedIn.guard';
import { Todo } from './todo';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

/**
 * Standardises how todos are accessed
 */

@Injectable()

export class TodosService {

    authUid = '';

    constructor(
        private firebase: AngularFire
    ) {
        this.firebase.auth.subscribe(a => this.authUid = a ? a.uid : '');
    }

    todos(): FirebaseListObservable<Todo[]> {
        return this.firebase.database.list(`/todos/${this.authUid}`);
    }

    todo(uid: string): FirebaseObjectObservable<Todo> {
        return this.firebase.database.object(`/todos/${this.authUid}/${uid}`);
    }
}

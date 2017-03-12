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

    constructor(
        private firebase: AngularFire,
        private isLoggedInGuard: IsLoggedInGuard
    ) {}

    todos(): FirebaseListObservable<Todo[]> {
        return this.isLoggedInGuard.continueIfLoggedIn()
            .switchMap(auth => this.firebase.database.list(`/todos/${auth.uid}`)) as FirebaseListObservable<Todo[]> ;
    }

    todo(uid: string): FirebaseObjectObservable<Todo> {
        return this.isLoggedInGuard.continueIfLoggedIn()
            .switchMap(auth => this.firebase.database.object(`/todos/${auth.uid}/${uid}`)) as FirebaseObjectObservable<Todo> ;
    }
}

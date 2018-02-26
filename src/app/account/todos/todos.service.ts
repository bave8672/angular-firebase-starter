import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {
    AngularFireDatabase,
    AngularFireList,
    AngularFireObject,
} from 'angularfire2/database';

import { Todo } from './todo';

/**
 * Standardises how todos are accessed
 */

@Injectable()
export class TodosService {
    constructor(
        private db: AngularFireDatabase,
        private auth: AngularFireAuth
    ) {}

    todos(): AngularFireList<Todo> {
        return this.db.list(`/todos/${this.auth.auth.currentUser.uid}`);
    }

    todo(uid: string): AngularFireObject<Todo> {
        return this.db.object<Todo>(
            `/todos/${this.auth.auth.currentUser.uid}/${uid}`
        );
    }
}

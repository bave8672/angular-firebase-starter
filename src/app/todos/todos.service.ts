import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

import { Todo } from './todo';

/**
 * Standardises how todos are accessed
 */

@Injectable()

export class TodosService {

    private authUid = '';

    constructor(
        private db: AngularFireDatabase,
        private auth: AngularFireAuth,
    ) {
        this.auth.authState.subscribe(a => this.authUid = a ? a.uid : '');
    }

    todos(): AngularFireList<Todo> {
        return this.db.list(`/todos/${this.authUid}`);
    }

    todo(uid: string): AngularFireObject<Todo> {
        return this.db.object<Todo>(`/todos/${this.authUid}/${uid}`);
    }
}

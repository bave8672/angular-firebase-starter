import { Action } from '@ngrx/store';

import { TodosActionTypes } from './todos.actionTypes';
import { Todo } from 'app/account/todos/todo';

export namespace TodosActions {

    export class Edit implements Action {
        readonly type = TodosActionTypes.Edit;
        /**
         * payload: uid
         */
        constructor(public readonly payload: string | null) { }
    }

    export class CloseEdit implements Action {
        readonly type = TodosActionTypes.CloseEdit;
        readonly payload: void;
    }

    export class Update implements Action {
        readonly type = TodosActionTypes.Update;
        /**
         * payload: name
         */
        constructor(public readonly payload: Todo) { }
    }

    export class Delete implements Action {
        readonly type = TodosActionTypes.Delete;
        /**
         * payload: uid
         */
        constructor(public readonly payload: string) { }
    }

    export type TodosAction =
        Edit
        | CloseEdit
        | Update
        | Delete;
}

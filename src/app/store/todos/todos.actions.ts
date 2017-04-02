import { TodosActionTypes } from './todos.actionTypes';
import { Action } from '@ngrx/store';
import { Todo } from '../../todos/todo';

export namespace TodosActions {

    export class Edit implements Action {
        type = TodosActionTypes.Edit;
        /**
         * payload: uid
         */
        constructor(public payload: string | null) {}
    }

    export class CloseEdit implements Action {
        type = TodosActionTypes.CloseEdit;
        payload: void;
    }

    export class Update implements Action {
        type = TodosActionTypes.Update;
        /**
         * payload: name
         */
        constructor(public payload: Todo) {}
    }

    export class Delete implements Action {
        type = TodosActionTypes.Delete;
        /**
         * payload: uid
         */
        constructor(public payload: string) {}
    }

    export type TodosAction =
        Edit
        | CloseEdit
        | Update
        | Delete;
}

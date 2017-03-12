import { TodosActionTypes } from './todos.actionTypes';
import { Action } from '@ngrx/store';
import { Todo } from '../../todos/todo';

export namespace TodosActions {

    export class Edit implements Action {
        type = TodosActionTypes.Edit;
        constructor(public payload: string) {} // uid
    }

    export class CloseEdit implements Action {
        type = TodosActionTypes.CloseEdit;
        constructor(public payload: string | null) {} //uid
    }

    export class Update implements Action {
        type = TodosActionTypes.Update;
        constructor(public payload: Todo) {} // name
    }

    export class Delete implements Action {
        type = TodosActionTypes.Delete;
        constructor(public payload: string) {} // uid
    }

    export type TodosAction =
        Edit
        | CloseEdit
        | Update
        | Delete;
}

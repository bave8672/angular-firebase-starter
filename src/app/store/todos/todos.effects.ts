import { TodosService } from '../../todos/todos.service';
import { StateService } from '../state-service/state.service';
import { TodosActions } from './todos.actions';
import { TodosActionTypes } from './todos.actionTypes';
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';

@Injectable()

export class TodosEffects {

    @Effect()
    update$ = this.state.actions$.ofType(TodosActionTypes.Update)
        .map((action: TodosActions.Update) => action.payload)
        .switchMap(todo => {
            if (!todo.uid) {
                const ref = this.todosService.todos().push(todo);
                todo.uid = ref.key;
                return ref.set(todo);
            } else {
                return this.todosService.todo(todo.uid).set(todo);
            }
        });

    constructor(
        private state: StateService,
        private todosService: TodosService
    ) {}
}

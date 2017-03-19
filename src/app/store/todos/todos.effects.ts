import { TodosService } from '../../todos/todos.service';
import { StateService } from '../state-service/state.service';
import { TodosActions } from './todos.actions';
import { TodosActionTypes } from './todos.actionTypes';
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';

@Injectable()

export class TodosEffects {

    @Effect({ dispatch: false })
    update$ = this.state.actions$.ofType(TodosActionTypes.Update)
        .map((action: TodosActions.Update) => action.payload)
        .switchMap(todo => {
            if (!todo.uid) {
                const ref = this.todosService.todos().push({
                    name: todo.name
                });
                return ref.set({
                    name: todo.name,
                    uid: ref.key
                });
            } else {
                return this.todosService.todo(todo.uid).set(todo);
            }
        });

    @Effect({ dispatch: false })
    delete$ = this.state.actions$.ofType(TodosActionTypes.Delete)
        .map((action: TodosActions.Delete) => action.payload)
        .map(uid => this.todosService.todo(uid).remove());

    constructor(
        private state: StateService,
        private todosService: TodosService
    ) {}
}

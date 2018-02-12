import { Action, ActionReducer, compose } from '@ngrx/store';
import { TodosActions } from 'app/store/todos/todos.actions';

import { hashReducer, useDefaultState } from '../../helpers';
import { ActionMap } from '../../helpers/actionMap';
import { assign } from '../../helpers/assign';
import { TodosActionTypes } from './todos.actionTypes';
import { DefaultTodosState, TodosState } from './todos.state';

const closeEdit = (state: TodosState) =>
    assign(state, { editing: '' });

export function TodosReducer(
    state: TodosState,
    action: TodosActions.TodosAction
): TodosState {
    switch (action.type) {
        case TodosActionTypes.Edit:
            return { ...state, editing: action.payload };

        case TodosActionTypes.CloseEdit:
        case TodosActionTypes.Update:
            return closeEdit(state);

        default:
            return state;
    }
}

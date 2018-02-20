import { TodosActionTypes } from './todos.actionTypes';
import { initialTodosState, TodosState } from './todos.state';
import { TodosActions } from 'app/account/state/todos/todos.actions';
import { assign } from 'app/helpers';

export function todosReducer(
    state: TodosState,
    action: TodosActions.TodosAction
): TodosState {
    switch (action.type) {
        case TodosActionTypes.Edit:
            return { ...state, editing: action.payload };

        case TodosActionTypes.CloseEdit:
        case TodosActionTypes.Update:
            return { ...state, editing: '' };

        default:
            return state;
    }
}

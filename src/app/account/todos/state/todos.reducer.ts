import { TodosActionTypes } from './todos.actionTypes';
import { initialTodosState, TodosState } from './todos.state';
import { assign } from 'app/helpers';
import { TodosActions } from 'app/account/todos/state/todos.actions';

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

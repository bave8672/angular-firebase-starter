import { TodosActions } from '../';
import { hashReducer, useDefaultState } from '../../helpers';
import { ActionMap } from '../../helpers/actionMap';
import { assign } from '../../helpers/assign';
import { TodosActionTypes } from './todos.actionTypes';
import { DefaultTodosState, TodosState } from './todos.state';
import { compose } from '@ngrx/store';
import { Action, ActionReducer } from '@ngrx/store';

const closeEdit = (state: TodosState, action: Action) => assign(state, { editing: '' });

export const _TodosReducer = compose<ActionMap<TodosState>, ActionReducer<TodosState>, ActionReducer<TodosState>>(
    useDefaultState(DefaultTodosState),
    hashReducer
)({
    [TodosActionTypes.Edit]:

        (state, action) => {
            const uid = (action as TodosActions.Edit).payload;
            return assign(state, { editing: uid });
        },

    [TodosActionTypes.Update]:

        closeEdit,

    [TodosActionTypes.CloseEdit]:

        closeEdit,
});

export function TodosReducer(state: TodosState, action: TodosActions.TodosAction): TodosState {
    switch (action.type) {
        case TodosActionTypes.Edit:
            return {
                ...state,
                editing: action.payload
            };

        default:
            return state;
    }
}
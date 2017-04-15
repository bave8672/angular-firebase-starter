import { TodosActions } from '../';
import { hashReducer, useDefaultState } from '../../helpers';
import { ActionMap } from '../../helpers/actionMap';
import { assign } from '../../helpers/assign';
import { TodosActionTypes } from './todos.actionTypes';
import { DefaultTodosState, TodosState } from './todos.state';
import { compose } from '@ngrx/core';
import { Action, ActionReducer } from '@ngrx/store';

const closeEdit = (state: TodosState, action: Action) => assign(state, { editing: '' });

export const TodosReducer = compose<ActionMap<TodosState>, ActionReducer<TodosState>, ActionReducer<TodosState>>(
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

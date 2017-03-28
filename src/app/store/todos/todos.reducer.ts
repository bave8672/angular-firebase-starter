import { TodosActions } from '../';
import { assign } from '../../helpers/assign';
import { TodosActionTypes } from './todos.actionTypes';
import { DefaultTodosState, TodosState } from './todos.state';
import { ActionReducer } from '@ngrx/store';

export const TodosReducer: ActionReducer<TodosState> = (state = DefaultTodosState, action) => {

    switch (action.type) {

        case TodosActionTypes.Edit: {
            const uid = (action as TodosActions.Edit).payload;
            return assign(state, { editing: uid });
        }

        case TodosActionTypes.Update:
        case TodosActionTypes.CloseEdit: {
            const uid = (action as TodosActions.Edit).payload;
            return assign(state, { editing: '' });
        }
    }

    return state;
};

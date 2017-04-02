import { TodosReducer, TodosActions } from './';
import { shouldNotAlterStateOnUnknownAction } from '../testing/reducerTestHelpers';
import { assignDeep } from '../../helpers/assignDeep';
import { DefaultTodosState, TodosState } from './todos.state';

describe('Todos Reducer', () => {

    shouldNotAlterStateOnUnknownAction(TodosReducer);

    let oldState: TodosState;

    beforeEach(() => {
        oldState = assignDeep(DefaultTodosState);
    });

    it(`Assigns the uid of the edited todo to the editing prop
        WHEN edit is called`, () => {

        const newState = TodosReducer(oldState, new TodosActions.Edit('123'));
        expect(newState.editing).toBe('123');
    });

    it(`Assigns an empty string to the editing prop
        WHEN Update is called`, () => {

        oldState.editing = '123';
        const newState = TodosReducer(oldState, new TodosActions.Update(null));
        expect(newState.editing).toBe('');
    });

    it(`Assigns an empty string to the editing prop
        WHEN Close Edit is called`, () => {

        oldState.editing = '123';
        const newState = TodosReducer(oldState, new TodosActions.CloseEdit());
        expect(newState.editing).toBe('');
    });
});

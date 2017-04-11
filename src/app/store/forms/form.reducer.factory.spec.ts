import { assign, assignDeep, getErrorMessage } from '../../helpers';
import { shouldNotAlterStateOnUnknownAction } from '../testing';
import { FormReducer, FormReducerOptions, FormState, FormStates } from './';
import { Action } from '@ngrx/store';

describe('Form reducer factory', () => {

    const config: FormReducerOptions<ExtendedFormState> = {
        show: 'show',
        hide: 'hide',
        toggle: 'toggle',
        request: 'request',
        success: 'success',
        failure: 'failure',
        extras: [{
            types: 'setExtraProp',
            func: (state, action) => assign(state, { extraProp: action.payload })
        }],
        successMessage: 'success!'
    };

    interface ExtendedFormState extends FormState {
        extraProp: any;
    }

    const reducer = FormReducer<ExtendedFormState>(config);

    let oldState: ExtendedFormState;

    beforeEach(() => {
        oldState = assignDeep(FormStates.Default as any, { extraProp: 'hello' });
    });

    shouldNotAlterStateOnUnknownAction(reducer);

    it('applies the form visibility WHEN show is called', () => {
        oldState.showForm = false;
        const newState = reducer(oldState, action(config.show as string));
        expect(newState).toEqual(assign(oldState, { showForm: true }));
    });

    it('applies the form visibility WHEN hide is called', () => {
        oldState.showForm = true;
        const newState = reducer(oldState, action(config.hide as string));
        expect(newState).toEqual(assign(oldState, { showForm: false }));
    });

    it('applies the form visibility WHEN toggle is called', () => {
        oldState.showForm = false;
        let newState = reducer(oldState, action(config.toggle as string));
        expect(newState).toEqual(assign(oldState, { showForm: true }));
        newState = reducer(newState, action(config.toggle as string));
        expect(newState).toEqual(assign(oldState, { showForm: false }));
    });

    it('applies the requesting state WHEN request is called', () => {
        const newState = reducer(oldState, action(config.request as string));
        expect(newState).toEqual(assign(oldState, FormStates.Requesting));
    });

    it('applies the success state WHEN success is called', () => {
        const newState = reducer(oldState, action(config.success as string));
        expect(newState).toEqual(assign(oldState, FormStates.Success(config.successMessage)));
    });

    it('applies the failure state WHEN failure is called', () => {
        const newState = reducer(oldState, action(config.failure as string));
        expect(newState).toEqual(assign(oldState, FormStates.Failure(getErrorMessage(undefined))));
    });

    it('Runs custom cases WHEN they are passed', () => {
        const newState = reducer(oldState, action('setExtraProp', '1234'));
        expect(newState).toEqual(assign(oldState, { extraProp: '1234' }));
    });
});

function action(type: string, payload = undefined): Action {
    return {
        type: type,
        payload: payload
    };
}

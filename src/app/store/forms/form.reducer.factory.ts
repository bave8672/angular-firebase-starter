import { Action, ActionReducer } from '@ngrx/store';
import { FormState, FormStates } from './';
import { assign, getErrorMessage } from '../../helpers';

type MaybeCollection<T> = T | T[];

export interface ActionCaseInput<T> {
    types: MaybeCollection<string>;
    func: ActionReducer<T>;
}

export interface ActionCase<T> {
    types: string[];
    func: ActionReducer<T>;
};

export interface FormReducerOptions<T> {
    show?: MaybeCollection<string>;
    hide?: MaybeCollection<string>;
    toggle?: MaybeCollection<string>;
    request?: MaybeCollection<string>;
    success?: MaybeCollection<string>;
    failure?: MaybeCollection<string>;
    extras?: ActionCaseInput<T>[];
    successMessage?: string;
    failureMessage?: string;
    defaultState?: T;
};

export function FormReducer<T extends FormState>(config: FormReducerOptions<T>): ActionReducer<T> {

    const cases: ActionCase<T>[] = [];

    function addCase(types: string | string[] | undefined, func: ActionReducer<T>) {
        if (types == null) {
            return;
        }
        if (Array.isArray(types)) {
            return cases.push({ types: types, func: func });
        } else {
            return cases.push({ types: [types], func: func });
        }
    }

    addCase(config.show, (state, action) => assign(state, { showForm: true }));
    addCase(config.hide, (state, action) => assign(state, { showForm: false }));
    addCase(config.toggle, (state, action) => assign(state, { showForm: !state.showForm }));
    addCase(config.request, (state, action) => assign(state, FormStates.Requesting));
    addCase(config.success, (state, action) => assign(state, FormStates.Success(config.successMessage)));
    addCase(config.failure,
        (state, action) =>
            assign(state, FormStates.Failure(getErrorMessage(action.payload, config.failureMessage))));

    if (config.extras) {
        config.extras.forEach(c => addCase(c.types, c.func));
    }

    const defaultState = config.defaultState ? config.defaultState : FormStates.Default;

    return (state = defaultState as T, action) => {

        for (const c of cases) {
            if (c.types.some(type => type === action.type)) {
                return c.func(state, action);
            }
        }

        return state;
    };
};

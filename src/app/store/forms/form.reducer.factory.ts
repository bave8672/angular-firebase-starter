import { Action, ActionReducer } from '@ngrx/store';
import { FormState, FormStates } from './';
import { assign, getErrorMessage } from '../../helpers';

export interface ActionCase<T> {
    type: string;
    func: ActionReducer<T>;
};

export interface FormReducerOptions<T> {
    show?: string;
    hide?: string;
    toggle?: string;
    request?: string;
    success?: string;
    failure?: string;
    extras?: ActionCase<T>[];
    successMessage?: string;
    failureMessage?: string;
    defaultState?: T;
};

export function FormReducer<T extends FormState>(config: FormReducerOptions<T>): ActionReducer<T> {

    const cases: ActionCase<T>[] = [];

    if (config.show) {
        cases.push({
            type: config.show,
            func: (state, action) => assign(state, { showForm: true })
        });
    }

    if (config.hide) {
        cases.push({
            type: config.hide,
            func: (state, action) => assign(state, { showForm: false })
        });
    }

    if (config.toggle) {
        cases.push({
            type: config.toggle,
            func: (state, action) => assign(state, { showForm: !state.showForm })
        });
    }

    if (config.request) {
        cases.push({
            type: config.request,
            func: (state, action) => assign(state, FormStates.Requesting)
        });
    }

    if (config.success) {
        cases.push({
            type: config.success,
            func: (state, action) => assign(state, FormStates.Success(config.successMessage))
        });
    }

    if (config.failure) {
        cases.push({
            type: config.failure,
            func: (state, action) => assign(state, FormStates.Failure(getErrorMessage(action.payload, config.failureMessage)))
        });
    }

    if (config.extras) {
        config.extras.forEach(c => cases.push(c));
    }

    const defaultState = config.defaultState ? config.defaultState : FormStates.Default;

    return (state = defaultState as T, action) => {

        for (const c of cases) {
            if (action.type === c.type) {
                return c.func(state, action);
            }
        }

        return state;
    };
};

import { ActionReducer, compose } from '@ngrx/store';
import { FormState, FormStates } from 'app/store/forms/formState';

import { ActionMap, assign, getErrorMessage, hashReducer } from '../../helpers';
import { useDefaultState } from '../../helpers/useDefaultState';

type MaybeCollection<T> = T | T[];

export interface ActionCaseInput<T> {
    types: MaybeCollection<string>;
    func: ActionReducer<T>;
}

export interface ActionCase<T> {
    types: string[];
    func: ActionReducer<T, any>;
}

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
}

export function FormReducer<T extends FormState>(
    config: FormReducerOptions<T>
): ActionReducer<any, any> {
    const actionMap: ActionMap<T> = {};

    function addCase(
        types: string | string[] | undefined,
        func: ActionReducer<T, any>
    ) {
        if (types == null) {
            return;
        }
        if (Array.isArray(types)) {
            types.forEach(type => (actionMap[type] = func));
        } else {
            actionMap[types] = func;
        }
    }

    addCase(config.show, (state, action) => assign(state, { showForm: true }));
    addCase(config.hide, (state, action) => assign(state, { showForm: false }));
    addCase(config.toggle, (state, action) =>
        assign(state, { showForm: !state.showForm })
    );
    addCase(config.request, (state, action) =>
        assign(state, FormStates.Requesting)
    );
    addCase(config.success, (state, action) =>
        assign(state, FormStates.Success(config.successMessage))
    );
    addCase(config.failure, (state, action) =>
        assign(
            state,
            FormStates.Failure(
                getErrorMessage(action.payload, config.failureMessage)
            )
        )
    );

    if (config.extras) {
        config.extras.forEach(c => addCase(c.types, c.func));
    }

    const defaultState = config.defaultState
        ? config.defaultState
        : FormStates.Default;

    return compose(useDefaultState(defaultState), hashReducer)(actionMap);
}

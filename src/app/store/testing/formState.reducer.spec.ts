import { shouldNotAlterStateOnUnknownAction } from './';
import { ActionReducer } from '@ngrx/store';

export type FormStateSpecOptions = {
    failureMessage: string;
    successMessage?: string;
    
};

export function formStateReducerSpec(reducer: ActionReducer<any>, options: FormStateSpecOptions) {
    
    it('')
}
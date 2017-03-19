export class FormState {
    showForm = false;
    isRequesting = false;
    successMessage = '';
    failureMessage = '';
}

export namespace FormStates {

    export const Requesting: FormState = {
        showForm: true,
        isRequesting: true,
        successMessage: '',
        failureMessage: ''
    };

    export const Success = (message: string): FormState => {
        return {
            showForm: true,
            isRequesting: false,
            successMessage: message,
            failureMessage: ''
        };
    };

    export const Failure = (message: string): FormState => {
        return {
            showForm: true,
            isRequesting: false,
            successMessage: '',
            failureMessage: message
        };
    };
}

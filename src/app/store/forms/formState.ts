export interface FormState {
    showForm: boolean;
    isRequesting: boolean;
    successMessage: string;
    failureMessage: string;
}

export namespace FormStates {

    export const Default: FormState = {
        showForm: false,
        isRequesting: false,
        successMessage: '',
        failureMessage: ''
    };

    export const Requesting: FormState = {
        showForm: true,
        isRequesting: true,
        successMessage: '',
        failureMessage: ''
    };

    export const Success = (message = ''): FormState => {
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

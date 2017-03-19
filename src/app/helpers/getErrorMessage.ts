import { Messages } from '../resources/messages';

export const tryGetErrorMessage = (error: any): string | void => {
    if (error) {
        if (typeof error === 'string') {
            return error;
        }
        for (const key in error) {
            if (error.hasOwnProperty(key) && /message/i.test(key)) {
                const message = tryGetErrorMessage(error[key]);
                if (message) {
                    return message;
                }
            }
        }
    }
};

export const getErrorMessage = (error: any): string => {
    const message = tryGetErrorMessage(error);
    return message ? message : Messages.ApiResponse.ServerError;
};

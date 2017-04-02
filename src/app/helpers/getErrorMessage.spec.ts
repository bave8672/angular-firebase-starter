import { tryGetErrorMessage } from './';

describe('getErrorMessage', () => {

    describe('tryGetErrorMessage', () => {

        it('Returns th message WHEN it is a string', () => {
            expect(tryGetErrorMessage('error')).toBe('error');
        });

        it('returns the string under a message or error property on the object if there is one', () => {
            expect(tryGetErrorMessage({ responseMessage: 'error' })).toBe('error');
            expect(tryGetErrorMessage({ responseError: 'error' })).toBe('error');
        });

        it(`returns the string under a message or error property
            on a child prop the object if there is one`, () => {
            expect(tryGetErrorMessage({ prop: { responseMessage: 'error' } })).toBe('error');
            expect(tryGetErrorMessage({ prop: { responseError: 'error' } })).toBe('error');
        });

        it(`returns falsy when there is no string or message or error props`, () => {
            expect(tryGetErrorMessage({ prop: { other: 'error' } })).toBeFalsy();
        });
    });
});

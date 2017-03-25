import { assign } from './';
describe('assign', () => {

    it(`Replaces target props with those from source
        AND does not modify the original objects`, () => {
        const targ = {
            x: 'x',
            y: 'y',
        };
        const src = {
            x: 'X',
        };
        const res = assign(targ, src);
        expect(res).toEqual({
            x: 'X',
            y: 'y'
        });
        expect(targ).toEqual({
            x: 'x',
            y: 'y',
        });
        expect(src).toEqual({
            x: 'X',
        });
    });
});

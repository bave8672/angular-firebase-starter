import { assignDeep } from './';

describe('assignDeep', () => {

    it('Functions like assign for top level props', () => {
        const targ = {
            x: 'x',
            y: 'y',
        };
        const src = {
            x: 'X',
        };
        const res = assignDeep(targ, src);
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

    it('preserves nested props on the target', () => {
        const targ = {
            nest: {
                x: 'x',
                y: 'y'
            }
        };
        const src = {
            nest: {
                x: 'X'
            }
        };
        const res = assignDeep(targ, src);
        expect(res).toEqual({
            nest: {
                x: 'X',
                y: 'y'
            }
        });
    });
});

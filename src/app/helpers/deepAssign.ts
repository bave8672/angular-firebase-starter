import { assign } from './';

export function deepAssign<T extends U, U extends Object>(target: T, source: U) {
    const result = assign(target, source);
    for (const key in source) {
        if (typeof source[key] === 'object') {
            result[key] = deepAssign(target[key] as any, source[key] as any);
        }
    }
    return result;
};

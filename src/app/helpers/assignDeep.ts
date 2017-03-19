import { assign } from './';

export function assignDeep<T extends U, U extends Object>(target: T, source: U) {
    const result = assign(target, source);
    for (const key in source) {
        if (typeof source[key] === 'object') {
            result[key] = assignDeep(target[key] as any, source[key] as any);
        }
    }
    return result;
};

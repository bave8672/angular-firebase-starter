import { assign } from './';

export function assignDeep<T extends U, U extends Object>(target: T, source: U = {} as any) {
    const result = assign(target, source);
    // Merge source child objects
    for (const key in source) {
        if (typeof source[key] === 'object') {
            result[key] = assignDeep(target[key] ? target[key] as any : {}, source[key] as any);
        }
    }
    // Clone target child objects not in source
    for (const key in target) {
        if (!source[key as any] && typeof target[key] === 'object') {
            result[key] = assignDeep(target[key] as any, {});
        }
    }
    return result;
};

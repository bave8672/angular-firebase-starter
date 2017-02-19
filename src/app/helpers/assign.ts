export function assign<T extends U, U>(target: T, source: U): T {
    return Object.assign({}, target, source);
}

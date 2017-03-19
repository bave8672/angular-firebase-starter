export type ObjectTree<T> = T & {
    $value: T;
    $path: () => string;
};

export function objectTree<T> (
    obj: T,
    path = ''
): ObjectTree<T> {
    return new Proxy({ $value: obj }, {
        get: (target, k) => {
            switch (k.toString()) {
                case '$value':
                    return target.$value;
                case '$path':
                    return path ? path : '/';
                default:
                    return objectTree(target.$value[k], path + '/' + k.toString());
            }
        },
        set: () => false
    }) as ObjectTree<T>;
}


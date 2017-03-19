export function assign<T extends U, U extends Object>(target: T, source: U): T {
    return Object.assign(
        {},
        target ? target : {} as T,
        source ? source : {} as U
    );
}

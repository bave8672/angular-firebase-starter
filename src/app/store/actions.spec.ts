import * as Store from './';

describe('Actions', () => {

    it('actions have unique types', () => {
        const hash = {};
        [
            Store.GlobalActions,
            Store.LogInActions,
            Store.NavActions,
            Store.SignUpActions,
            Store.TodosActions
        ].forEach(ns => {
            for (const key in ns) {
                if (ns.hasOwnProperty(key)) {
                    const type = new ns[key]().type;
                    if (hash[type]) {
                        throw new Error(`Duplicate actions of type ${type}`);
                    }
                    hash[type] = true;
                }
            }
        });
    });
});


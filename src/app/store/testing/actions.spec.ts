import { GlobalActions } from 'app/store/global/global.actions';
import { LogInActions } from 'app/store/user/logIn/logIn.actions';
import { NavActions } from 'app/store/nav/nav.actions';
import { SignUpActions } from 'app/sign-up/state/form/signUpForm.actions';
import { TodosActions } from 'app/account/todos/state/todos.actions';

describe('Actions', () => {
    it('actions have unique types', () => {
        const hash = {};
        [
            GlobalActions,
            LogInActions,
            NavActions,
            SignUpActions,
            TodosActions,
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

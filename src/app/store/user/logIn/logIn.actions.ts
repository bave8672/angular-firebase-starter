import { AuthProvider } from '@firebase/auth-types';
import { Action } from '@ngrx/store';
import { LogInActionTypes } from 'app/store/user/logIn/logIn.actionTypes';

export namespace LogInActions {
    export class ShowModal implements Action {
        readonly type = LogInActionTypes.ShowModal;
    }

    export class HideModal implements Action {
        readonly type = LogInActionTypes.HideModal;
    }

    export class LogIn implements Action {
        readonly type = LogInActionTypes.LogIn;
        constructor(
            public readonly payload:
                | AuthProvider
                | { email: string; password: string }
        ) {}
    }

    export class LogOut implements Action {
        readonly type = LogInActionTypes.LogOut;
    }

    export class Failure implements Action {
        readonly type = LogInActionTypes.Failure;
        constructor(public readonly payload: any) {}
    }

    export class Success implements Action {
        readonly type = LogInActionTypes.Success;
    }

    export type LogInAction = ShowModal | HideModal | LogIn | Failure | Success;
}

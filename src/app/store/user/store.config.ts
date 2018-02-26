import { ActionReducerMap } from '@ngrx/store/src/models';
import { UserState } from 'app/store/user/user.state';
import { logInReducer } from 'app/store/user/logIn/logIn.reducer';

export const globalUserReducers: ActionReducerMap<UserState> = {
    logIn: logInReducer,
};

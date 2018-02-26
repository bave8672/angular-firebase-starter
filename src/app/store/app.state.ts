import { DefaultNavState, NavState } from 'app/store/nav/nav.state';
import { defaultUserState, UserState } from 'app/store/user/user.state';

export interface AppState {
    user: UserState;
    nav: NavState;
}

export const defaultAppState: AppState = {
    user: defaultUserState,
    nav: DefaultNavState,
};

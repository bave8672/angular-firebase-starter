import { DefaultNavState, NavState } from 'app/store/nav/nav.state';
import { DefaultUserState, UserState } from 'app/store/user/user.state';

export interface AppState {
    user: UserState;
    nav: NavState;
}

export const DefaultAppState: AppState = {
    user: DefaultUserState,
    nav: DefaultNavState,
};

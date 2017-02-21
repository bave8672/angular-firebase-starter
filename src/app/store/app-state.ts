import { RouterState } from '@ngrx/router-store';
import { UserState } from './user/user.state';

export class AppState {
    user = new UserState();
    router: RouterState
}

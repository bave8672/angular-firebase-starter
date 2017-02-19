import { UserEffects } from './user/user.effects';
import { UserReducer } from './user/user.reducer';

export const Reducers = {
        user: UserReducer
};

export const Effects = [
        UserEffects
];

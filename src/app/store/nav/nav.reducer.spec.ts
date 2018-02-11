import { assignDeep } from '../../helpers/assignDeep';
import { NavReducer } from './nav.reducer';
import { shouldNotAlterStateOnUnknownAction } from '../testing/reducerTestHelpers';
import { NavState, DefaultNavState } from 'app/store/nav/nav.state';
import { NavActions } from 'app/store/nav/nav.actions';

describe('Nav Reducer', () => {

    shouldNotAlterStateOnUnknownAction(NavReducer);

    let oldState: NavState;

    beforeEach(() => {
        oldState = assignDeep(DefaultNavState);
    });

    it('Reverses the nav visibility WHEN Toggle is called', () => {
        let newState = NavReducer(oldState, new NavActions.ToggleNavigation());
        expect(newState.showNavigation).toBe(true);

        newState = NavReducer(newState, new NavActions.ToggleNavigation());
        expect(newState.showNavigation).toBe(false);
    });
});

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import {busy, busyCompleted} from '../../app/actions/CommonActions';
import {BUSY, BUSY_COMPLETED} from '../../app/actions/CommonActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('CommonActions - dispatch actions', () => {

    it('test dispatch action busy', () => {
        const expectedActions = [
            {type: BUSY}
        ];
        const store = mockStore({})
        store.dispatch(busy())

        expect(store.getActions()).toEqual(expectedActions)
    });

    it('test dispatch action busyCompleted', () => {
        const expectedActions = [
            {type: BUSY_COMPLETED}
        ];
        const store = mockStore()
        store.dispatch(busyCompleted())

        expect(store.getActions()).toEqual(expectedActions);

    });

});



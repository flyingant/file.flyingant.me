import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import NetworkMiddleware from '../../app/middleware/NetworkMiddleware';
import expect from 'expect';
import nock from 'nock';

import {
    initializeAppThroughThunk,
    initializeAppCompleted,
    initializeAppFailed,
    initializeAppThroughSaga
} from '../../app/actions/RootActions';
import {
    INITIALIZE_APP_THUNK,
    INITIALIZE_APP_SAGA,
    INITIALIZE_APP_COMPLETED,
    INITIALIZE_APP_FAILED
} from '../../app/actions/RootActionTypes';
import {REQUEST, RESPONSE, FAILURE, BASE_URL} from '../../app/constants';

const mockStore = configureMockStore([thunk]);
const mockStoreWithNetworkMiddleware = configureMockStore([thunk]);

describe('RootActions -- dispatch actions', () => {

    it('test dispatch action initializeAppThroughThunk', () => {
        const expectedActions = [
            {
                type: INITIALIZE_APP_THUNK,
                payload: {
                    status: 'test'
                },
                meta: {
                    method: 'GET',
                    endpoint: 'test',
                    data: {
                        status: 'test'
                    }
                }
            }
        ];
        const store = mockStore()
        store.dispatch(initializeAppThroughThunk(
            {status: 'test'},
            {status: 'test'}
        ))

        expect(store.getActions()).toEqual(expectedActions);
    });

    it('test dispatch action initializeAppThroughThunk + REQUEST', () => {
        const expectedActions = [
            {
                type: INITIALIZE_APP_THUNK + REQUEST,
                payload: {
                    status: 'test'
                }
            }
        ];
        const store = mockStore()
        store.dispatch({
            type: INITIALIZE_APP_THUNK + REQUEST,
            payload: {
                status: 'test'
            }
        })

        expect(store.getActions()).toEqual(expectedActions);
    });

    it('test dispatch action initializeAppThroughThunk + RESPONSE', () => {
        const expectedActions = [
            {
                type: INITIALIZE_APP_THUNK + RESPONSE,
                payload: {
                    status: 'test'
                }
            }
        ];
        const store = mockStore()
        store.dispatch({
            type: INITIALIZE_APP_THUNK + RESPONSE,
            payload: {
                status: 'test'
            }
        })

        expect(store.getActions()).toEqual(expectedActions);
    });

    it('test dispatch action initializeAppThroughThunk + FAILURE', () => {
        const expectedActions = [
            {
                type: INITIALIZE_APP_THUNK + FAILURE,
                payload: {
                    status: 'test'
                }
            }
        ];
        const store = mockStore()
        store.dispatch({
            type: INITIALIZE_APP_THUNK + FAILURE,
            payload: {
                status: 'test'
            }
        })

        expect(store.getActions()).toEqual(expectedActions);
    });

    it('test dispatch action initializeAppCompleted', () => {
        const expectedActions = [
            {
                type: INITIALIZE_APP_COMPLETED,
                payload: {
                    status: 'test'
                }
            }
        ];
        const store = mockStore()
        store.dispatch(initializeAppCompleted(
            {status: 'test'}
        ))

        expect(store.getActions()).toEqual(expectedActions);
    });

    it('test dispatch action initializeAppFailed', () => {
        const expectedActions = [
            {
                type: INITIALIZE_APP_FAILED,
                payload: {
                    status: 'test'
                }
            }
        ];
        const store = mockStore()
        store.dispatch(initializeAppFailed(
            {status: 'test'}
        ))

        expect(store.getActions()).toEqual(expectedActions);
    })
});
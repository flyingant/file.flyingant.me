import Immutable from 'immutable';
import expect from 'expect';
import AppReducer from '../../app/reducers/AppReducer';

import {REQUEST, RESPONSE, FAILURE} from '../../app/constants';
import {INITIALIZE_APP_THUNK, INITIALIZE_APP_SAGA} from '../../app/actions/RootActionTypes';

describe('App Reducer', () => {

    it('should return the default app state', () => {
        expect(
            AppReducer(undefined, {})
        ).toEqual(
            Immutable.Map({
                status: ''
            })
        )
    })

    it('should handle INITIALIZE_APP_THUNK + REQUEST ', () => {
        expect(
            AppReducer(Immutable.Map(), {
                type: INITIALIZE_APP_THUNK + REQUEST,
                payload: {
                    status: 'test'
                }
            })
        ).toEqual(
            Immutable.Map({
                status: 'test'
            })
        )
    })

    it('should handle INITIALIZE_APP_THUNK + RESPONSE ', () => {
        expect(
            AppReducer(Immutable.Map(), {
                type: INITIALIZE_APP_THUNK + RESPONSE,
                payload: {
                    status: 'test'
                }
            })
        ).toEqual(
            Immutable.Map({
                status: 'test'
            })
        )
    })

    it('should handle INITIALIZE_APP_THUNK + FAILURE ', () => {
        expect(
            AppReducer(Immutable.Map(), {
                type: INITIALIZE_APP_THUNK + FAILURE,
                payload: {
                    message: 'error'
                }
            })
        ).toEqual(
            Immutable.Map({
                message: 'error'
            })
        )
    })

    it('should handle INITIALIZE_APP_SAGA + REQUEST ', () => {
        expect(
            AppReducer(Immutable.Map(), {
                type: INITIALIZE_APP_SAGA + REQUEST,
                payload: {
                    status: 'test'
                }
            })
        ).toEqual(
            Immutable.Map({
                status: 'test'
            })
        )
    })

    it('should handle INITIALIZE_APP_SAGA + RESPONSE ', () => {
        expect(
            AppReducer(Immutable.Map(), {
                type: INITIALIZE_APP_SAGA + RESPONSE,
                payload: {
                    status: 'test'
                }
            })
        ).toEqual(
            Immutable.Map({
                status: 'test'
            })
        )
    })

    it('should handle INITIALIZE_APP_SAGA + FAILURE ', () => {
        expect(
            AppReducer(Immutable.Map(), {
                type: INITIALIZE_APP_SAGA + FAILURE,
                payload: {
                    message: 'error'
                }
            })
        ).toEqual(
            Immutable.Map({
                message: 'error'
            })
        )
    })


})
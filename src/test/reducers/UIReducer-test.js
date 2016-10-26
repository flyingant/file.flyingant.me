import Immutable from 'immutable';
import expect from 'expect';
import UIReducer from '../../app/reducers/UIReducer';

import {BUSY, BUSY_COMPLETED} from '../../app/actions/CommonActionTypes';

describe('UI Reducer', () => {

    it('should return the default ui state', () => {
        expect(
            UIReducer(undefined, {})
        ).toEqual(
            Immutable.Map({
                busy: false
            })
        )
    })

    it('should handle BUSY ', () => {
        expect(
            UIReducer(Immutable.Map(), {
                type: BUSY
            })
        ).toEqual(
            Immutable.Map({
                busy: true
            })
        )
    })

    it('should handle BUSY_COMPLETED ', () => {
        expect(
            UIReducer(Immutable.Map(), {
                type: BUSY_COMPLETED
            })
        ).toEqual(
            Immutable.Map({
                busy: false
            })
        )
    })


})

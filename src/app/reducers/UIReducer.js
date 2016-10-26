import Immutable from 'immutable';

import {BUSY, BUSY_COMPLETED} from '../actions/CommonActionTypes';

const DEFAULT_UI_STATE = {
    busy: false
};

function ui(state, action) {
    const currentState = state || Immutable.Map(DEFAULT_UI_STATE);
    switch (action.type) {
        case BUSY:
            return state.merge({'busy': true});
        case BUSY_COMPLETED:
            return state.merge({'busy': false});
        default:
            return currentState;
    }
}

module.exports = ui;

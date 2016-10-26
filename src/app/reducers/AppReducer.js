import Immutable from 'immutable';
import {REQUEST, RESPONSE, FAILURE} from '../constants';

import {INITIALIZE_APP_THUNK, INITIALIZE_APP_SAGA} from '../actions/RootActionTypes';

const DEFAULT_APP_STATE = {
    status: ''
};

function app(state, action) {
    const currentState = state || Immutable.Map(DEFAULT_APP_STATE);
    switch (action.type) {
        case INITIALIZE_APP_THUNK + REQUEST:
            return currentState.merge(action.payload);
        case INITIALIZE_APP_THUNK + RESPONSE:
            return currentState.merge(action.payload);
        case INITIALIZE_APP_THUNK + FAILURE:
            return currentState.merge({message: action.payload.message});
        case INITIALIZE_APP_SAGA + REQUEST:
            return currentState.merge(action.payload);
        case INITIALIZE_APP_SAGA + RESPONSE:
            return currentState.merge(action.payload);
        case INITIALIZE_APP_SAGA + FAILURE:
            return currentState.merge({message: action.payload.message});
        default:
            return currentState;
    }
    return currentState;
}

module.exports = app;

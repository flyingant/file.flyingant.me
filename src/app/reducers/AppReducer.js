import Immutable from 'immutable';

const DEFAULT_APP_STATE = {
    status: ''
};

function app(state, action) {
    const currentState = state || Immutable.Map(DEFAULT_APP_STATE);
    switch (action.type) {

        default:
            return currentState;
    }
    return currentState;
}

module.exports = app;

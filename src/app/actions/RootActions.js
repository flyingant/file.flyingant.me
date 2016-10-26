import {
    INITIALIZE_APP_THUNK,
    INITIALIZE_APP_SAGA,
    INITIALIZE_APP_COMPLETED,
    INITIALIZE_APP_FAILED
} from './RootActionTypes';

export function initializeAppThroughThunk(payload, args = {}) {
    return {
        type: INITIALIZE_APP_THUNK,
        payload: payload,
        meta: {
            method: 'GET',
            endpoint: 'api/echo?status=OK',
            data: args
        },
    };
}

export function initializeAppThroughSaga(payload, args = {}) {
    return {
        type: INITIALIZE_APP_SAGA,
        payload: payload
    };
}

export function initializeAppCompleted(args) {
    return {
        type: INITIALIZE_APP_COMPLETED,
        payload: args
    };
}

export function initializeAppFailed(args) {
    return {
        type: INITIALIZE_APP_FAILED,
        payload: args
    }
}




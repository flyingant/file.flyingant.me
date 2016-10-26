import {takeEvery} from 'redux-saga';
import {put, call} from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import {INITIALIZE_APP_SAGA} from '../actions/RootActionTypes';

import {initializeAppCompleted, initializeAppFailed} from '../actions/RootActions';
import {busy, busyCompleted} from '../actions/CommonActions';

function fechApi(status) {
    return fetch('http://www.flyingant.me/api/echo?status=OK').then((response) => response.json());
}

function* handleInitializeApp() {
    try {
        yield put(busy());
        var initializeStatus = yield call(fechApi, 'Initialized')
        yield put(initializeAppCompleted(initializeStatus));
        yield put(busyCompleted());
    } catch (e) {
        yield put(initializeAppFailed({status: e.message}));
        yield put(busyCompleted());
    }
}
// watch initialize action
export function* watchInitializeApp() {
    yield* takeEvery(INITIALIZE_APP_SAGA, handleInitializeApp);
}


export default function* root() {
    yield [
        watchInitializeApp()
    ]
}

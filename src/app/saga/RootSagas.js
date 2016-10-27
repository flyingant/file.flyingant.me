import {takeEvery} from 'redux-saga';
import {put, call} from 'redux-saga/effects';
import api from '../api';

import {UPLOAD_FILE, FILTER_FILES} from '../actions/FileActionTypes';
import {uploadFileCompleted, uploadFileFailed, filterFilesCompleted, filterFilesFailed} from '../actions/FileActions';
import {busy, busyCompleted} from '../actions/CommonActions';

function* handleUploadFile(data) {
    try {
        console.log('Upload Data:', data);
        yield put(busy());
        var result = yield call(api.upload, data)
        yield put(uploadFileCompleted(result));
        yield put(busyCompleted());
    } catch (e) {
        yield put(uploadFileFailed({status: e.message}));
        yield put(busyCompleted());
    }
}

function* handleFilterFiles(data) {
    try {
        console.log('Query Data:', data);
        yield put(busy());
        var result = yield call(api.filter, data)
        yield put(filterFilesCompleted(result));
        yield put(busyCompleted());
    } catch (e) {
        yield put(filterFilesFailed({status: e.message}));
        yield put(busyCompleted());
    }
}

export function* watchFilterFiles() {
    yield* takeEvery(FILTER_FILES, handleFilterFiles);
}

export function* watchUploadFile() {
    yield* takeEvery(UPLOAD_FILE, handleUploadFile);
}

export default function* root() {
    yield [
        watchFilterFiles(),
        watchUploadFile()
    ]
}

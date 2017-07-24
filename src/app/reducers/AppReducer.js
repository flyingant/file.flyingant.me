import Immutable from 'immutable';
import {
    SELECT_FILE,
    UPLOAD_FILE,
    UPLOAD_FILE_COMPLETED,
    UPLOAD_FILE_FAILED,
    FILTER_FILES,
    FILTER_FILES_COMPLETED,
    FILTER_FILES_FAILED
} from '../actions/FileActionTypes';

const DEFAULT_APP_STATE = {
    queryString: '',
    offset: 0,
    max: 10,
    totalCount: 0,
    hasPrevious: false,
    hasNext: false,
    previousOffset: 0,
    nextOffset: 0,
    status: 'Pending', //Pending, Uploading, Uploaded, Filtering
    selectedFile: null,
    files: []
};

function app(state, action) {
    const currentState = state || Immutable.Map(DEFAULT_APP_STATE);
    switch (action.type) {
        case SELECT_FILE :
            return state.merge({
                'status': 'Pending',
                'selectedFile': action.payload.file
            });
        case UPLOAD_FILE :
            return state.merge({
                'status': 'Uploading'
            });
        case UPLOAD_FILE_COMPLETED :
            return state.merge({
                'status': 'Uploaded'
            });
        case FILTER_FILES :
            return state.merge({
                'status': 'Filtering'
            });
        case FILTER_FILES_COMPLETED :
            return state.merge(action.payload);
        default:
            return currentState;
    }
    return currentState;
}

module.exports = app;

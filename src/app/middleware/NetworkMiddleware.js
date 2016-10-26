import fetch from 'isomorphic-fetch';
import {REQUEST, RESPONSE, FAILURE} from '../constants';
import {BASE_URL} from '../constants';

const networkApi = (store) => (next) => (action) => {
    // nothing happened
    if (!action.meta || !action.meta.endpoint) {
        return next(action);
    }
    let thunkAction = (dispatch, getState) => {
        const type = action.type;
        const meta = action.meta;
        const payload = action.payload;

        // dispatch the requesting action
        dispatch({
            type: type + REQUEST,
            payload: payload,
            meta: meta
        });

        let params = {};

        const URL = BASE_URL + meta.endpoint;
        params.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        params.body = meta.data;
        return fetch(URL, params)
            .then(response => {
                if (response.status >= 300) {
                    throw Error('Failed Response Code ' + response.status);
                }
                return response.json();
            })
            .then(json => {
                return json;
            })
            .then(json => {
                return dispatch({
                    type: type + RESPONSE,
                    payload: json
                });
            })
            .catch(error => {
                return dispatch({
                    type: type + FAILURE,
                    payload: error
                });
            })
    }

    return next(thunkAction);
};

export default networkApi;

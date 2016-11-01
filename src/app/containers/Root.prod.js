import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {createRouter} from '../routes';

export default function Root(props) {
    return (
        <Provider store={props.store}>
            <div>
              { createRouter() }
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
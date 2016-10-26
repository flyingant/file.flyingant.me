import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {createRouter} from '../routes';
import DevTools from '../dev/DevTools';

export default function Root(props) {
    return (
        <Provider store={props.store}>
            <div>
                { createRouter() }
                <DevTools/>
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};

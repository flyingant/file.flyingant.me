import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './containers/Root';
import configureStore from './stores/configureStore';

const TARGET_EL = document.getElementById('main');

const store = configureStore();

ReactDOM.render(
    <Root store={store}/>,
    TARGET_EL
);

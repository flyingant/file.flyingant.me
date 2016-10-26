import React, {PropTypes} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// components
import AppContainer from './containers/AppContainer';
import HomeContainer from './containers/HomeContainer';

import {useRouterHistory} from 'react-router';
import {createHashHistory} from 'history';

export function createRouter() {
    const history = useRouterHistory(createHashHistory)({queryKey: false});
    return (
        <Router history={history}>
            <Route path="/" component={AppContainer}>
                <IndexRoute component={HomeContainer}/>
            </Route>
        </Router>
    )
}
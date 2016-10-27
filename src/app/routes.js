import React, {PropTypes} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// components
import AppContainer from './containers/AppContainer';
import HomeContainer from './containers/HomeContainer';

import {useRouterHistory} from 'react-router';
import {createHashHistory} from 'history';

let routers = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={HomeContainer}/>
  </Route>
);

export function createRouter() {
    const history = useRouterHistory(createHashHistory)({queryKey: false});
    return (
        <Router history={history}>
          {routers}
        </Router>
    )
}
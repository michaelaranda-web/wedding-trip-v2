import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import routes from './components/routes.jsx';
import App from './components/app.jsx';

require('./stylesheets/index.scss');

render(
  <Router history={hashHistory}>
    {routes}
  </Router>,
  document.getElementById('app')
);
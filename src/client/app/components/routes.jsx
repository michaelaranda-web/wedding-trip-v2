import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './app.jsx';
import { Home } from './home.jsx';
import { Japan } from './japan.jsx';
import { NotFound } from './notFound.jsx';

export default (
  <Route path='/' component={App}>
    <Route path='japan' component={Japan} />
  	<Route path='*' component={NotFound} />
    <IndexRoute component={Home} />
  </Route>
);
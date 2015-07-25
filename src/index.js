import React from 'react';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import App from './app';
import Home from './home';
import Test from './test';

document.addEventListener('DOMContentLoaded', function() {
  React.render(
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="home" component={Home}/>
        <Route path="test" component={Test}/>
      </Route>
    </Router>,
    document.body
  );
});

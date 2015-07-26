import React from 'react';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import App from './app';
import Home from './home';
import Test from './test';

let onUpdate = function() {
  console.log(this.state.location.pathname);
};

let router = (
  <Router history={history} onUpdate={onUpdate}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/test" component={Test} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function() {
  React.render(
    router,
    document.body
  );
});

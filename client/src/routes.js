import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Login from './components/auth/Login';

const Routes = () => (
  <Switch>
    <Route path='/login' component={Login} />
    <Route component={LandingPage} />
  </Switch>
);

export default Routes;

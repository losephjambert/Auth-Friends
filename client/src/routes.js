import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';

import LandingPage from './components/LandingPage';
import Login from './components/auth/Login';
import Friends from './components/private/Friends';

const Routes = () => (
  <Switch>
    <Route path='/login' component={Login} />
    <PrivateRoute path='/friends' component={Friends} />
    <Route component={LandingPage} />
  </Switch>
);

export default Routes;
